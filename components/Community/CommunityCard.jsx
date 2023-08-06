import React from "react";
import { ProfileCard } from "../UI";

const CommunityCard = ({ image, name, description, commitCount }) => {
  // Custom label for the username "anmode"
  const contributorLabel = name.toLowerCase() === "anmode" ? "Project Admin" : "Contributor";

  // Function to generate the URL for the GitHub commits page for the contributor
  const getCommitsURL = (username) => {
    return `https://github.com/anmode/grabtern-frontend/commits?author=${username}`;
  };

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
      {commitCount !== undefined && (
        <p className="tw-mt-4">
          No. of Commits:{" "}
          <a href={getCommitsURL(name)} target="_blank" rel="noreferrer">
            {commitCount}
          </a>
        </p>
      )}
    </ProfileCard>
  );
};

export default CommunityCard;
