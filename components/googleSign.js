import { useState,useEffect } from 'react';
import jwt_decode from "jwt-decode"


function GoogleSignInButton({ onSignInSuccess, onSignInFailure }) {

  const handleCallBackResponse = (response)=>{
    console.log(response);
    const userObject = jwt_decode(response.credential);
console.log(userObject);
  }
  
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '1094459761-q1vtukt1ka03dgualp9cetajd938ab96.apps.googleusercontent.com',
    callback:handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'), {
        theme: 'outline',
        size: 'large',
        text: 'sign in with Google',
        prompt_parent_id: 'google-signin-button'
      });

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

  return (
    <div id="google-signin-button"></div>
  );
}

export default GoogleSignInButton;
