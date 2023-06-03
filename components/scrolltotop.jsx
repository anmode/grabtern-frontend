import styles from "../styles/scrolltotop.module.css";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100 && window.pageYOffset !== 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility(); // Check visibility on initial render

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.scrollToTop} ${isVisible ? "" : styles.inactive}`}
    >
      {isVisible && (
        <div className={styles.centeredArrow} onClick={scrollToTop}>
          <FaArrowUp className={styles.arrowicon} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
