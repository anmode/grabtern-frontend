import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import CommunityCard from "../components/Community/CommunityCard";
import { Section } from "../components/UI";
import Footer from "../components/layout/Footer";
const Header = dynamic(() => import("../components/layout/Header"));

function Community() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/anmode/grabtern-frontend/contributors")
      .then((response) => {
        console.log(response.data);
        setContributors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to fetch commit count for each contributor
  const fetchCommitCount = (login) => {
    return axios
      .get(`https://api.github.com/repos/anmode/grabtern-frontend/commits`, {
        params: {
          author: login,
        },
      })
      .then((response) => {
        return response.data.length;
      })
      .catch((error) => {
        console.log(`Error fetching commit count for ${login}: ${error}`);
        return 0;
      });
  };

  useEffect(() => {
    const fetchCommitCounts = async () => {
      const contributorsWithCommits = await Promise.all(
        contributors.map(async (contributor) => {
          const commitCount = await fetchCommitCount(contributor.login);
          return {
            ...contributor,
            commitCount,
          };
        })
      );
      setContributors(contributorsWithCommits);
    };

    fetchCommitCounts();
  }, [contributors]);

  return (
    <>
      <Header />
      <main>
        <Section
          kicker="Grabtern team"
          heading="Our Community"
          subheading="Meet the members of Grabtern Community"
          align="center"
          className="tw-mt-10"
        >
          <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {contributors.map((data, index) => (
              <a
                href={`https://github.com/${data.login}`}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <CommunityCard
                  image={data?.avatar_url}
                  name={data?.login}
                  description={`Contributor - ${data?.contributions}`}
                  commitCount={data?.commitCount}
                />
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default Community;