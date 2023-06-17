import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));
import Head from "next/head";

function Mentors({ mentorsData }) {
  const [data, setData] = useState(mentorsData);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [skipvalue, setSkipValue] = useState(6);
  const [completed, setCompleted] = useState(false);

  const getMentorData = async () => {
    {
      !completed && setLoading(true);
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists?_limit=${limit}&_skipvalue=${skipvalue}`
    );
    const newData = await res.json();

    if (newData.length > 0) {
      const filterData = newData.filter(
        (mentor) =>
          mentor.verified === true && mentor.token === "mentorIsVerified"
      );

      setData([...data, ...filterData]);
      setSkipValue(skipvalue + limit);
      setLoading(false);
      console.log("data here", newData);
    } else {
      setCompleted(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(() => {
    getMentorData();
    console.log(data);
  }, [limit]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        (window.innerHeight + document.documentElement.scrollTop) * 1.4 >=
        document.documentElement.scrollHeight
      ) {
        setLimit((prev) => prev + 6);
        // setSkipValue(skipvalue+limit);
      }
    } catch (error) {
      console.log("Error in handleInfiniteScroll function", error);
    }
  };

  return (
    <>
      <Head>
        <title>GrabTern | Find Your Mentors</title>
      </Head>
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
            {data.length === 0 ? (
              <p>There is no mentor right now...</p>
            ) : (
              <div className="mentorLists">
                {data.map((mentor) => (
                  <a href={`/${mentor.username}`} key={mentor._id}>
                    {<MentorCard mentor={mentor} />}
                  </a>
                ))}
              </div>
            )}
            
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                }}
              >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="/assets/img/gif/Spinner.gif"
                  alt="...loading"
                />
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

export const getServerSideProps = async (context) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists?_limit=6&_skipvalue=0`;
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
