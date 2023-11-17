// IIFE - To avoid flash of default theme: light | Initialize theme
(function () {
  const isDarkMode =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("darkMode") || "false")
      ? true
      : false;
  isDarkMode && document.documentElement.classList.add("tw-dark");
})();
