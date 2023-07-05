import React,{ useState } from 'react'
import SessionCard from "../../components/mentorProfile/components/SessionCard";
import styles1 from "../../styles/mentorTestimonial.module.css";
function Sessions({mentorDetail}) {
  const [modalPopup, setModalPopup] = useState(false);
  const [selectedSession, setSelectedSession] = useState("");
  const sendMail = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/bookSessionMail`,
        data
      );
      setIsLoading(false);
      setModalPopup(false);
      toast.success(
        "Your session has been booked! Check your inbox for payment details."
      ); // Success toast
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 400) {
        toast.error("You have already booked this session"); // Error toast
      } else if (error.response && error.response.status === 405) {
        toast.error("You are not allowed to book your own session"); // Error toast
      } else {
        console.error("Error sending mail:", error);
        toast.error("Facing any problem? Email Us"); // Error toast
      }
    }
  };
  const handleClick = (mentordata) => {
    const { sessionName, sessionMeetingDuration, priceSession } = mentordata;
    const { email, name, username } = mentorDetail;

    if (isUserLoggedIn) {
      sessionStorage.removeItem("redirectUrl");
      handleBookSession(
        sessionName,
        email,
        name,
        sessionMeetingDuration,
        priceSession
      );
    } else {
      const redirectUrl = window.location.href;
      sessionStorage.setItem("redirectUrl", redirectUrl);
      router.push(`/userAuth#login`);
    }
  };
  const handleBookSession = async (
    sessionName,
    mentorEmail,
    mentorName,
    sessionTime,
    sessionPrice
  ) => {
    const userEmail = userData.user_email;
    const userName = userData.user_name;
    const data = {
      sessionName,
      mentorEmail,
      userEmail,
      mentorEmail,
      userName,
      mentorName,
      sessionTime,
      sessionPrice,
    };

    try {
      await sendMail(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
          <div className={`${styles1.sessions}  tw-min-w-full  tw-py-11 tw-flex tw-flex-col`}>
              <div  className="  tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center">

              <h1 className="tw-text-7xl tw-items-center tw-px-8 tw-relative tw-top-8  ">Sessions</h1>
              </div>
            <div className={`${styles1.sessionCard} tw-flex tw-flex-col tw-items-stretch tw-max-w-[448px] tw-ml-32 tw-relative tw-mt-32`}>
              {/* Session Cards for every session */}
              {mentorDetail.bookSession.length !== 0 &&
                mentorDetail.bookSession.map((session, index) => (
                  <SessionCard
                    key={index}
                    type={session?.sessionType}
                    name={session?.sessionName}
                    description={session?.sessionDescription}
                    duration={session?.sessionMeetingDuration}
                    pricePerSession={session?.priceSession}
                    handleBookSession={() => {
                      setModalPopup(true);
                      
                    }}
                    // handleBookSession={() => handleClick(session)}
                  />
                ))}
            </div>
            </div>
    </div>
  )
}

export default Sessions
