import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
import teamsData from "./data/teamsData";
import { useApi } from "./customHook/useAPi.js";
import { list } from "postcss";
const Header = dynamic(() => import("../components/Header"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));

function Mentors({ mentorsData }) {
  const [query, setQuery] = useState("");

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
  const data = useApi(url);
  // const mentorsData= data.filter((mentor) =>mentor.verified === true && mentor.token === "mentorIsVerified");

  // console.log(query)
  // console.log(teamsData.filter(user=>user.profileName.toLowerCase().includes("ag")))
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
      <main>
        <section className="findMentors">
          <div className="container">
            <h1>Find All mentors here</h1>

            <div className="tw-flex tw-justify-center">
              <input
                type="text"
                placeholder="Search Mentors..."
                className="search tw-h-20 px-8 p-4 tw-rounded-full py-2 text-gray-700 sm:w-50 md:tw-w-2/5"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* <ul className="list">
              {teamsData.filter((user)=>
              user.profileName.toLowerCase().includes(query)
              ).map((user)=>(
                <li key={user.imageSrc} className="listitem">
                  {user.profileName}
                </li>
                ))}
            </ul> */}

            <ul className="mentorLists">
              {mentorsData
                .filter(
                  (mentor) =>
                    mentor.name.toLowerCase().includes(query.toLowerCase()) ||
                    mentor.internAt
                      .toLowerCase()
                      .includes(query.toLowerCase()) ||
                    mentor.currentStatus
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  //item.
                )
                .map((mentor) => (
                  // <li key={mentor.imageSrc} className="listitem">
                  //   {mentor.profileName}
                  // </li>
                  <a href={`/${mentor.username}`} key={mentor._id}>
                    {<MentorCard mentor={mentor} />}
                  </a>
                ))}
            </ul>

            {/* {mentorsData.length === 0 ? (
              <p>There is no mentor right now...</p>
            ) : (
              <div className="mentorLists">
                {mentorsData.map((mentor) => (
                  <a href={`/${mentor.username}`} key={mentor._id}>
                    {<MentorCard mentor={mentor} />}
                  </a>
                ))}
              </div>
            )} */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Mentors;

export const getStaticProps = async (context) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
  const { data } = await axios.get(url);

  return {
    props: {
      mentorsData: data.filter(
        (mentor) =>
          mentor.verified === true && mentor.token === "mentorIsVerified"
      ),
    },
    revalidate: 20, // revalidate the data every 20 seconds
  };
};
