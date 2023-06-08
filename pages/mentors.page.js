import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));

function Mentors({ mentorsData }) {
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
      <main>
        {/* <div className="sidebody" style="height:69vh;">
          <div className="searchbar">
            <input placeholder="Search...." id="searchbar" name="searchbar" type="text">

            </input>
            <i className="fa-soli fa-magnifying-glass"></i>
          </div>
        </div> */}
        <section className="findMentors">
          <div className="container">
            <h1>Find All Mentors Here</h1>
            {mentorsData.length === 0 ? (
              <p>There is no mentor right now...</p>
            ) : (
              <div className="mentorLists">
                {mentorsData.map((mentor) => (
                  <a href={`/${mentor.username}`} key={mentor._id}>
                    {<MentorCard mentor={mentor} />}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
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
