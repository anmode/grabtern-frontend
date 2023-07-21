import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { LuSearch } from "react-icons/lu";
import MentorCard from "../components/mentor";
import teamsData from "./data/teamsData";
import { useApi } from "../hook/useAPi.js";
import { list } from "postcss";
const Header = dynamic(() => import("../components/layout/Header"));
const SimpleBanner = dynamic(() => import("../components/basic/SimpleBanner"));
import { Section, Input } from "../components/UI";

function Mentors({ mentorsData }) {
  const [query, setQuery] = useState("");

  // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
  // const data = useApi(url);
  // const mentorsData= data.filter((mentor) =>mentor.verified === true && mentor.token === "mentorIsVerified");

  // console.log(query)
  // console.log(teamsData.filter(user=>user.profileName.toLowerCase().includes("ag")))
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
            {/* <input
              type="text"
              placeholder="Search Mentors..."
              className="search"
              onChange={(e) => setQuery(e.target.value)}
            /> */}
          </div>
          {/* mentors cards */}
          <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {mentorsData
              .filter(
                (mentor) =>
                  mentor.name.toLowerCase().includes(query.toLowerCase()) ||
                  mentor.internAt.toLowerCase().includes(query.toLowerCase()) ||
                  mentor.currentStatus
                    .toLowerCase()
                    .includes(query.toLowerCase()),
              )
              .map((mentor) => (
                <a href={`/${mentor.username}`} key={mentor._id}>
                  {<MentorCard mentor={mentor} link={`/${mentor.username}`} />}
                </a>
              ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default Mentors;

export const getServerSideProps = async (context) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
    const { data } = await axios.get(url);
    // console.log(data);

    return {
      props: {
        mentorsData: data,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        mentorsData: [],
      },
    };
  }
};
