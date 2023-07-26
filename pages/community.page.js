import React, { useState } from "react";
import dynamic from "next/dynamic";
import CommunityCard from "../components/Community/CommunityCard";
import teamsData from "./data/teamsData";
import { Section } from "../components/UI";
import Footer from "../components/layout/Footer";
const Header = dynamic(() => import("../components/layout/Header"));

function Community() {
  const [query, setQuery] = useState("");

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
            {teamsData
              .filter((member) =>
                member.profileName.toLowerCase().includes(query.toLowerCase()),
              )
              .map((member, index) => (
                <a href={`/${member.profileName}`} key={index}>
                  {
                    <CommunityCard
                      image={member.imageSrc}
                      name={member.profileName}
                      description={member.profileDescription}
                    />
                  }
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
