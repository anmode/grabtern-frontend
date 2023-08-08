import React, { useState } from "react";

// import styles from '../styles/Searchbar.module.css'; // Import the CSS file

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
      <form className="tw-w-full  tw-max-w-[340px] tw-mx-auto ml-0 ">
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
            className="tw-block tw-w-full tw-h-full tw-py-4 tw-pl-16 tw-pr-8 tw-text-xl tw-text-purple-500 tw-border tw-border-gray-500  focus:tw-ring-blue-500  focus:tw-ring-1 focus:tw-border-blue-500         tw-rounded-3xl   tw-placeholder-purple-700 "
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
      </form>
      <div className={`tw-mt-8 tw-flex tw-flex-wrap tw-gap-4  `}>
        <button
          type="button"
          className={`${
            selectedTag[0] === "All"
              ? "tw-bg-purple-600 tw-text-white  "
              : "tw-bg-white tw-text-purple-600  "
          } ${
            window.innerWidth > 768 ? "tw-text-base" : "tw-text-base"
          } tw-p-0.5 tw-border  tw-cursor-pointer font-small tw-rounded-full text-xs tw-px-5 tw-py-2  tw-mb-2 `}
          onClick={() => handleTagChange("All")}
          style={{
            fontSize: window.innerWidth > 768 ? "16px" : "14px",
            backgroundColor: selectedTag[0] === "All" ? "#845ec2" : "#fff",
            borderColor: selectedTag[0] === "All" ? "#845ec2" : "#845ec2",
          }}
        >
          All
        </button>

        {InternshipLabels &&
          InternshipLabels.map((mylabel) => (
            <button
              type="button"
              key={mylabel}
              className={`${
                selectedTag.includes(mylabel)
                  ? "tw-bg-purple-600 tw-text-white  "
                  : "tw-bg-white tw-text-purple-600  "
              } ${
                window.innerWidth > 768 ? "tw-text-base" : "tw-text-sm"
              } tw-p-0.5 tw-border  tw-cursor-pointer font-small tw-rounded-full text-xs px-5   mb-2  `}
              style={{
                whiteSpace: "nowrap",
                fontSize: window.innerWidth > 768 ? "16px" : "14px",
                padding: "0.5rem",
                backgroundColor: selectedTag.toString().includes(mylabel)
                  ? "#845ec2"
                  : "#fff",
                borderColor: selectedTag[0] === "All" ? "#845ec2" : "#845ec2",
              }}
              onClick={() => handleTagChange(mylabel)}
            >
              {mylabel}
            </button>
          ))}
        {HackathonLabels &&
          HackathonLabels.map((mylabel) => (
            <>
              <button
                type="button"
                key={mylabel}
                className={`${
                  selectedTag.includes(mylabel)
                    ? "tw-bg-purple-600 tw-text-white tw-border-purple-600 "
                    : "tw-bg-white tw-text-purple-600 tw-border-purple-600 "
                } ${
                  window.innerWidth > 768 ? "tw-text-base" : "tw-text-sm"
                } tw-p-0.5 tw-border  tw-cursor-pointer font-small tw-rounded-full text-xs px-5   mb-2  `}
                style={{
                  whiteSpace: "nowrap",
                  fontSize: window.innerWidth > 768 ? "16px" : "14px",
                  padding: "0.5rem",
                  backgroundColor: selectedTag.toString().includes(mylabel)
                    ? "#845ec2"
                    : "#fff",
                  borderColor: selectedTag[0] === "All" ? "#845ec2" : "#845ec2",
                }}
                onClick={() => handleTagChange(mylabel)}
              >
                {mylabel}
              </button>
            </>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
