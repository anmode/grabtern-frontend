// Community.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import CommunityCard from "../components/Community/CommunityCard";
import teamsData from "./data/teamsData";
import { Section } from "../components/UI";
import Footer from "../components/layout/Footer";
const Header = dynamic(() => import("../components/layout/Header"));

function Community() {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/anmode/grabtern-frontend/contributors")
      .then((response) => {
        setContributors(response.data);
      })
      .catch((error) => {
        console.error("Got error in fetching contributors detail ", error);
      });
  }, []);

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
                  name={
                    data.login === "anmode" ? `${data.login}` : `${data.login}`
                  }
                  description={data?.contributions}
                  commits={data?.contributions}
                ></CommunityCard>
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
