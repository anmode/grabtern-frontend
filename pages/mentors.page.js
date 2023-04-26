import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Mentor } from "../../grabtern-backend/models/mentor";

const MENTORS_QUERY = gql`
  query Mentors {
    mentors {
      name
      internAt
      currentStatus
    }
  }
`;

function Mentors() {
  const { loading, error, data } = useQuery(MENTORS_QUERY, {
    fetchPolicy: "cache-and-network", // cache-first, cache-and-network, network-only, etc.
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const mentorsData = data.mentors.filter(
    (mentor) => mentor.verified === true && mentor.token === "mentorIsVerified"
  );

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

export default Mentors;
