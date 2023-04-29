import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
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
                  <a href={`/${mentor.username}`} key={mentor._id}>
                    {
                      /* <div className="mentorCard">
                      <img src={mentor.mentorImg} alt="exampleMentorPhoto" />
                      <h2 className="mentorName">{mentor.name}</h2>
                      <div
                        className="contactLinks"
                        style={{ marginBottom: "10px" }}
                      >
                        <a href={`/mentors/${mentor.username}`} target="_blank">
                          <i class="fas fa-envelope"></i>
                        </a>
                        <a href={`${mentor.social.linkedin}`} target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                        <a href={`${mentor.social.twitter}`} target="_blank">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                      <h3>Intern at: {mentor.internAt}</h3>
                      <h3>{mentor.currentStatus}</h3>
                      <p>
                        {mentor.description?.length > 120
                          ? `${mentor.description.substring(0, 120)}…`
                          : mentor.description}
                      </p>
                      { <h3>Price for each intern: {mentor.sessionPrice}</h3> }
                    </div> */
                      <MentorCard mentor={mentor} />
                    }
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
  };
};
