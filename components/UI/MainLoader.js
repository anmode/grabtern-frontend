import React from "react";

const MainLoader = () => {
  return (
    <div style={styles.newPreloaderContainer}>
      <div style={styles.newLoaderBackground}></div>
      <div id="new-preloader-active" style={styles.newPreloaderActive}>
        <div style={styles.newPreloader}>
          <div style={styles.newPreloaderInner}>
            <div style={styles.newPreloaderCircle}></div>
            <div style={styles.newPreloaderImg}>
              <div style={styles.newImgWrapper}>
                <img src="faviconn.png" alt="Loading" style={styles.newImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  newPreloaderContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  newLoaderBackground: {
    // Add necessary styles for new loader background
  },
  newPreloaderActive: {
    transition: "all 0.5s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  newPreloader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newPreloaderInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  newPreloaderCircle: {
    width: "80px",
    height: "80px",
    border: "5px solid #f0f0f0",
    borderTop: "5px solid purple",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  newPreloaderImg: {
    position: "absolute",
  },
  newImgWrapper: {
    backgroundColor: "white",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newImg: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
  },
};

export default MainLoader;
