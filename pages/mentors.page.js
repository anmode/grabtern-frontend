import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));
import { useState, useEffect } from "react";
import styles from "../styles/filter.module.css";

function Mentors({ mentorsData }) {
  const [search, setsearch] = useState("");

  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
      <div className={styles.global_search}>
        <input
          className={styles.search_bar}
          _ngcontent-d2c-frontend-c75=""
          type="text"
          autoComplete="off"
          placeholder="Search Mentors"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
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
            <h1>Find All mentors here's</h1>
            {mentorsData.length === 0 ? (
              <p>There is no mentor right now...</p>
            ) : (
              <div className="mentorLists">
                {mentorsData
                  .filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(search.toLowerCase()) ||
                      item.currentStatus
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.internAt.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((mentor) => (
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
