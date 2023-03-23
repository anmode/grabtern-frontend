import { useEffect } from 'react';

function GoogleSignInButton({ onSignInSuccess, onSignInFailure }) {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '1094459761-q1vtukt1ka03dgualp9cetajd938ab96.apps.googleusercontent.com',
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'), {
        theme: 'outline',
        size: 'large',
        text: 'sign in with Google',
        prompt_parent_id: 'google-signin-button'
      });

    // Set up sign-in listeners
    google.accounts.id.listen({
      onGoogleIdTokenChanged: response => {
        if (response.error) {
          onSignInFailure(response.error);
        } else {
          onSignInSuccess(response);
        }
      }
    });
  }, [onSignInSuccess, onSignInFailure]);

  return (
    <div id="google-signin-button"></div>
  );
}

export default GoogleSignInButton;
