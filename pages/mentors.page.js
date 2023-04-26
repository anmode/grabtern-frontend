import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
import Header from "../components/Header";
import SimpleBanner from "../components/SimpleBanner";
import { Spin } from "antd";

const Mentors = () => {
  const [mentorsData, setMentorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
        const { data } = await axios.get(url);
        setMentorsData(
          data.filter(
            (mentor) =>
              mentor.verified === true && mentor.token === "mentorIsVerified"
          )
        );
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
      <main>
        <section className="findMentors">
          <div className="container">
            <h1>Find all mentors here</h1>
            {isLoading ? (
              <div className="loadingSpinner">
                <Spin size="large" />
              </div>
            ) : isError ? (
              <p>There was an error while fetching mentors.</p>
            ) : mentorsData.length === 0 ? (
              <p>There are no mentors available right now.</p>
            ) : (
              <div className="mentorLists">
                {mentorsData.map((mentor) => (
                  <a href={`/${mentor.username}`} key={mentor._id}>
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
};

export default Mentors;
