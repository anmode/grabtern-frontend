import React, { useState, useEffect } from "react";
import styles from "../../styles/slider.module.css";

const Slider = ({ val, setVal, min, max, step }) => {
  return (
    <div className={`${styles.controls}`}>
      <input
        className={`${styles.zoom_range} ${styles.controls}`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
};

export default Slider;
