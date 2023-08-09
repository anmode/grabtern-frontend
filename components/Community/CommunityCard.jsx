// CommunityCard.js

import React from "react";
import { ProfileCard } from "../UI";

const CommunityCard = ({ image, name, description, commits }) => {
  const role = name === "anmode" ? "Project Admin" : "Contributor";
  const commitsUrl = `https://github.com/anmode/grabtern-frontend/commits?author=${name}`;

  return (
    <ProfileCard
      image={image}
      heading={name}
      subheading={
        <>
          <span style={{ fontWeight: "normal" }}>{role}</span>
          <br />
          Commits:{" "}
          <a href={commitsUrl} target="_blank" rel="noreferrer">
            {commits}
          </a>
        </>
      }
      intent="bg"
      size="lg"
      direction="col"
      rounded="lg"
      align="center"
    ></ProfileCard>
  );
};

export default CommunityCard;
