import router from "next/router";

export const mentorLogout = (setIsMentorLoggedIn) => {
  localStorage.clear();
  setIsMentorLoggedIn(false);
  router.push("/");
  window.location.reload();
};

export const userLogout = (setIsUserLoggedIn) => {
  localStorage.clear();
  setIsUserLoggedIn(false);
  router.push("/");
  window.location.reload();
};
