import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/MentorCard";
const Header = dynamic(() => import("../components/Header"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));

function Mentors({ mentorsData }) {
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
      <main>
        <section className="findMentors">
          <div className="container">
            <h1>Find All mentors here's</h1>
            {mentorsData.length === 0 ? (
              <p>There is no mentor right now...</p>
            ) : (
              <div className="mentorLists">
                {mentorsData.map((mentor) => (
                  <a href={`/mentors/${mentor.username}`} key={mentor._id}>
                    <MentorCard mentor={mentor} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Mentors;

export const getServerSideProps = async (context) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
  const { data } = await axios.get(url);

  return {
    props: {
      mentorsData: data.filter(
        (mentor) =>
          mentor.verified === true && mentor.token === "mentorIsVerified"
      ),
    },
  };
};
