import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios"

function GoogleSignInButton({ onSignInSuccess, onSignInFailure }) {
  const handleCallBackResponse = async (response) => {
    let number = Math.random(0 * 100);
    const userObject = jwt_decode(response.credential);
    const userData = {
      name: userObject.name,
      email: userObject.email,
      username:
        userObject.name.replaceAll(" ", "-").toLowerCase() + Math.floor(number),
      mobile: "N/A",
      internAt: "N/A",
      currentStatus: "N/A",
      social: {
        linkedin: "N/A",
        twitter: "N/A",
      },
      bookSession: [
        {
          sessionName: "1 on 1 Mentorship",
          sessionDescription:
            "Achieve your goals faster with customized road map",
          sessionType: "video-meeting",
          sessionMeetingDuration: "30",
          // peopleAttend: "",
          priceSession: "N/A",
        },
      ],
      description: "N/A",
      mentorImg: userObject.picture,
      // resume: '',
      verified: true,
      password: `GrabternMentorPW!${number}!`,
      confirmPassword: `GrabternMentorPW!${number}!`,
    };

    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorRegister`;
      console.log(url)
      const { data: res } = await axios.post(url, userData);
      alert("You have been registered!")
    } catch (error) {
      console.log(error)
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
    console.log(userData);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1094459761-q1vtukt1ka03dgualp9cetajd938ab96.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      {
        theme: "outline",
        size: "large",
        text: "sign in with Google",
        prompt_parent_id: "google-signin-button",
      }
    );

    // Set up sign-in listeners
    // google.accounts.id.listen({
    //   onGoogleIdTokenChanged: response => {
    //     if (response.error) {
    //       onSignInFailure(response.error);
    //     } else {
    //       onSignInSuccess(response);
    //     }
    //   }
    // });
  }, [onSignInSuccess, onSignInFailure]);

  return <div id="google-signin-button"></div>;
}

export default GoogleSignInButton;
