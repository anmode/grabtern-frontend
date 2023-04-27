import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import MentorCard from "../components/mentor";
const Header = dynamic(() => import("../components/Header"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { Spin } from "antd";

const queryClient = new QueryClient();

function Mentors() {
  const [isLoading, setIsLoading] = useState(true);

  const { data: mentorsData, isError, error } = useQuery(
    "mentors",
    async () => {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
      const { data } = await axios.get(url);
      return data.filter(
        (mentor) =>
          mentor.verified === true && mentor.token === "mentorIsVerified"
      );
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: () => setIsLoading(false),
    }
  );

  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
      <main>
        <section className="findMentors">
          <div className="container">
            <h1>Find All mentors here's</h1>
            {isError ? (
              <p>{error.message}</p>
            ) : isLoading ? (
              <div className="loadingSpinner">
                <Spin size="large" />
              </div>
            ) : mentorsData.length === 0 ? (
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
    </>
  );
}

export default function MentorsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Mentors />
    </QueryClientProvider>
  );
}
