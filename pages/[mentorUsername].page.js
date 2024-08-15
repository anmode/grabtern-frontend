import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = React.lazy(() => import("../components/layout/Header"));
import axios from "axios";
import Head from "next/head";
import SessionCard from "../components/newMentorProfile/SessionCard";
import SharePageModal from "../components/mentorProfile/components/SharePageModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Testimonial } from "../components/homePage";
import MentorAbout from "../components/newMentorProfile/mentorAbout";
import { Section } from "../components/UI";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
// testimonial carousel options
const testimonialOptions = {
  margin: 40,
  items: 4,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 2,
    },
    1170: {
      items: 3,
    },
  },
};

function Index({ mentorDetail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Head>
          <title>GrabTern | Book Your Session</title>
        </Head>
        <Header navbarBackground={true} />
        {/* Mentor Page */}
        <main className="tw-pt-4">
          <MentorAbout
            mentorDetail={mentorDetail}
            onShare={() => setShowModal(true)}
          />

          {/* session section */}
          <Section
            kicker="mentor schedule"
            heading="Available Sessions"
            subheading="Ignite your inner fire, embrace personalized guidance, and 
            unlock your true potential through transformative mentor sessions."
            align="center"
          >
            <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
              {/* Session Cards for every session */}
              {mentorDetail?.sessions?.length !== 0 &&
                mentorDetail?.sessions?.map((session, index) => (
                  <SessionCard
                    key={index}
                    type={session.type}
                    name={session.name}
                    description={session.description}
                    duration={session.duration}
                    price={session.price}
                    handleBookSession={() => {
                      window.location.href = `/${mentorDetail?.username}/bookSession?sessionID=${session._id}`;
                    }}
                  />
                ))}
            </div>
          </Section>

          {/* testimonial section */}
          <Section
            kicker="student's review"
            heading="Testimonials"
            subheading="Inspiring Testimonials on the Transformative Mentorship Experience"
            align="center"
          >
            <div>
              {carousel === true ? (
                <OwlCarousel
                  {...testimonialOptions}
                  autoplay={true}
                  lazyLoad={true}
                  smartSpeed={1000}
                  autoplayTimeout={3500}
                  nav={true}
                  loop={true}
                  autoplayHoverPause={true}
                  className="owl-carousel owl-theme"
                >
                  {/* testimonial Cards for every session */}
                  {mentorDetail?.testimonials?.length !== 0 &&
                    mentorDetail?.testimonials?.map((testimonial, index) => (
                      <Testimonial
                        key={index}
                        testimonialUserName={testimonial.name}
                        testimonialHeadline={testimonial.headline}
                        testimonialUserImage={testimonial.image}
                        testimonialRate={testimonial.rate}
                        testimonialDescription={testimonial.description}
                      />
                    ))}
                </OwlCarousel>
              ) : null}
            </div>
          </Section>

          {/* Share Mentor Page Modal */}
          {showModal && (
            <SharePageModal
              handleClose={() => setShowModal(false)}
              username={mentorDetail?.username}
            />
          )}
          {/* Error Display */}
          {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
          {/* Book Session Modal */}
          {/* {!error && modalPopup && (
            <BookSessionModal
              handleClose={() => setModalPopup(false)}
              handleCancel={() => setModalPopup(false)}
              handleConfirm={() => handleClick(selectedSession)}
            />
          )} */}
          {/* Successful Alert Message */}
          {/* {emailSent && (
          <div style={{ color: "green" }}>
            Your session has been booked! Check your inbox for payment details.
          </div>
        )} */}
        </main>
        {/* {isLoading && (
          <>
            <div className={styles.overlay}></div>
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
              }}
            >
              <div className={styles.loader}></div>
            </div>
          </>
        )} */}
        <ToastContainer />
      </React.Suspense>
    </>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const { mentorUsername } = context.params;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorDetail/${mentorUsername}`;

  try {
    const { data: res } = await axios.get(url);

    if (res.message === "Invalid link") {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        mentorDetail: res.mentorDetail,
        mentorUsername,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}
