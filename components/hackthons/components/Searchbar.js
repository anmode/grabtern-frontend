import React, { useState } from "react";

// import styles from '../styles/Searchbar.module.css'; // Import the CSS file

import Chip from "@mui/material/Chip";

function SearchBar({
  setSearchQuery,
  handleTagFilter,
  InternshipLabels,
  HackathonLabels,
}) {
  const [selectedTag, setSelectedTag] = useState(["All"]);

  const handleTagChange = (value) => {
    const set = new Set(selectedTag);
    if (value === "All") {
      set.clear();
      set.add("All");
    } else if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
      set.delete("All");
    }
    if (set.size === 0) {
      set.add("All");
    }
    const newValue = [...set];
    setSelectedTag(newValue);
    handleTagFilter(newValue);
  };

  return (
    <>
      <form className="tw-w-full  tw-max-w-[340px] tw-mx-auto ml-0">
        <label
          htmlFor="default-search"
          className="tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-sr-only tw-dark:text-white"
        >
          Search
        </label>
        <div className="tw-relative">
          <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6 tw-pointer-events-none">
            <img
              className="tw-w-5 tw-h-5"
              src="/assets/img/hackathons/magnifying-glass.png"
              alt="Custom Icon"
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="tw-block tw-w-full tw-h-full tw-py-4 tw-pl-16 tw-pr-8 tw-text-xl tw-text-purple-500 tw-border tw-border-gray-500  focus:tw-ring-blue-500  focus:tw-ring-1 focus:tw-border-blue-500         tw-rounded-3xl   tw-placeholder-purple-500 "
            placeholder={
              HackathonLabels ? "Search Hackathons" : "Search Internships"
            }
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            style={{
              height: window.innerWidth > 768 ? 55 : 45,
              fontSize: window.innerWidth > 768 ? 20 : 16,
              paddingTop: 5,
              paddingBottom: 5,
              paddingRight: 5,
              marginTop: 0,
              borderRadius: 50,
              color: "#845ec2",
            }}
            required=""
          />
        </div>
        <div className="tw-mt-8 tw-flex tw-flex-row tw-gap-4">
          <Chip
            variant={selectedTag === "All" ? "default" : "outlined"}
            // color={selectedTag === "All" ? "primary" : "info"}
            label="ALL"
            value="All"
            onClick={() => handleTagChange("All")}
            style={{
              fontSize: window.innerWidth > 768 ? "16px" : "14px",
              padding: "1rem",
              backgroundColor: selectedTag[0] === "All" ? "#845ec2" : "#fff",
              borderColor: selectedTag[0] === "All" ? "#845ec2" : "#845ec2",
              color: selectedTag[0] === "All" ? "#fff" : "#845ec2",
            }}
          />

          {InternshipLabels &&
            InternshipLabels.map((mylabel) => (
              <Chip
                key={mylabel}
                variant={selectedTag === { mylabel } ? "default" : "outlined"}
                // color={selectedTag === label ? "primary" : "info"}
                label={mylabel}
                onClick={() => handleTagChange(mylabel)}
                style={{
                  fontSize: window.innerWidth > 768 ? "16px" : "14px",
                  padding: "1rem",
                  backgroundColor: selectedTag.toString().includes(mylabel)
                    ? "#845ec2"
                    : "#fff",
                  borderColor: selectedTag.toString().includes(mylabel)
                    ? "#845ec2"
                    : "#845ec2",
                  color: selectedTag.toString().includes(mylabel)
                    ? "#fff"
                    : "#845ec2",
                }}
              />
            ))}
          {HackathonLabels &&
            HackathonLabels.map((mylabel) => (
              <Chip
                key={mylabel}
                variant={selectedTag === { mylabel } ? "default" : "outlined"}
                // color={selectedTag === label ? "primary" : "info"}
                label={mylabel}
                onClick={() => handleTagChange(mylabel)}
                style={{
                  fontSize: window.innerWidth > 768 ? "16px" : "14px",
                  padding: "1rem",
                  backgroundColor: selectedTag.includes(mylabel.toString())
                    ? "#845ec2"
                    : "#fff",
                  borderColor: selectedTag.toString().includes(mylabel)
                    ? "#845ec2"
                    : "#845ec2",
                  color: selectedTag.toString().includes(mylabel)
                    ? "#fff"
                    : "#845ec2",
                }}
              />
            ))}
        </div>
      </form>
    </>
  );
}

export default SearchBar;
