"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      className="rounded mx-2"
    >
      {mode === "dark" ? (
        <SunIcon className="h-8 w-8" onClick={toggle} />
      ) : (
        <MoonIcon className="h-8 w-8" onClick={toggle} />
      )}
    </button>
  );
};

export default DarkModeToggle;
