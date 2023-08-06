// CommunityCard.jsx
import React, { useState, useEffect } from "react";
import { ProfileCard } from "../UI";
import axios from "axios";

const CommunityCard = ({ image, name, description }) => {
  const [commitCount, setCommitCount] = useState(null);

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/anmode/grabtern-frontend/commits`,
          {
            params: {
              author: name,
            },
          }
        );

        const commitCount = response.data.length;
        setCommitCount(commitCount);
      } catch (error) {
        console.log(`Error fetching commit count for ${name}: ${error}`);
        setCommitCount(0); // Set commit count to 0 in case of an error.
      }
    };

    fetchCommitCount();
  }, [name]);

  const contributorLabel =
    name.toLowerCase() === "anmode" ? "Project Admin" : "Contributor";

  return (
    <ProfileCard
      image={image}
      heading={name}
      subheading={contributorLabel}
      intent="bg"
      size="lg"
      direction="col"
      rounded="lg"
      align="center"
    >
      {commitCount !== null && (
        <p className="tw-mt-4">
          No. of Commits:{" "}
          <a
            href={`https://github.com/anmode/grabtern-frontend/commits?author=${name}`}
            target="_blank"
            rel="noreferrer"
          >
            {commitCount}
          </a>
        </p>
      )}
    </ProfileCard>
  );
};

export default CommunityCard;
