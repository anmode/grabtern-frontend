import React, { useState } from "react";
import dynamic from "next/dynamic";
import { LuSearch } from "react-icons/lu";
import MentorCard from "../components/mentor";
import { useApi } from "../hook/useAPi";
import { Section, Input } from "../components/UI";

const Header = dynamic(() => import("../components/layout/Header"));
const SimpleBanner = dynamic(() => import("../components/basic/SimpleBanner"));

function Mentors() {
  const [query, setQuery] = useState("");
  // Use the useApi hook to fetch and cache data
  const { apidata, isLoading } = useApi(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`,
    true,
  );

  const filteredMentors = apidata.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(query.toLowerCase()) ||
      mentor.internAt.toLowerCase().includes(query.toLowerCase()) ||
      mentor.currentStatus.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <Header />
      <main>
        <Section
          kicker="Our Mentors"
          heading="Find all Mentors Here"
          subheading="Embark on a Journey of Knowledge,
          Inspiration, and Success"
          align="center"
          className="tw-mt-10"
        >
          {/* input */}
          <div className="md:tw-w-96 tw-mb-4 tw-ml-auto">
            <Input
              Icon={LuSearch}
              type="text"
              placeholder="Search Mentors..."
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* mentors cards */}
          <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {isLoading ? (
              <div className="tw-text-black tw-text-xl ">
                <h1>Loading Mentor...</h1>
              </div>
            ) : filteredMentors.length === 0 ? (
              <div className="tw-text-black tw-text-xl ">
                <h1>No match found</h1>
              </div>
            ) : (
              filteredMentors.map((mentor) => (
                <a href={`/${mentor.username}`} key={mentor._id}>
                  <MentorCard mentor={mentor} link={`/${mentor.username}`} />
                </a>
              ))
            )}
          </div>
        </Section>
      </main>
    </>
  );
}

export default Mentors;
