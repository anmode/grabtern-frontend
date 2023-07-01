import React, { useState, useEffect } from "react";
import hackathonStyle from "../../../styles/hackathon.module.css";
// import styles from '../styles/Searchbar.module.css'; // Import the CSS file
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import { IconButton, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { startCase } from "lodash";

function SearchBar({ setSearchQuery, handleTagFilter, tagFilter }) {
  const [selectedTag, setSelectedTag] = useState(["All"]);

  const handleTagChange = (value) => {

    if (selectedTag.includes(value)) {
      setSelectedTag(selectedTag.filter((tag) => tag !== value));
      handleTagFilter(tagFilter.filter((tag) => tag !== value));
    }
    else {
      setSelectedTag([...selectedTag, value]);
      handleTagFilter([...tagFilter, value]);
    }

  };

  useEffect(() => {
    if (selectedTag.length === 0) {
      setSelectedTag(["All"]);
      handleTagFilter(["All"]);
    }
  })

  const theme = createTheme({
    components: {
      // Name of the component ⚛️
      MuiButtonBase: {
        defaultProps: {
          // The default props to change
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        variant="outlined"
        placeholder="Search Hackathons"
        size="Normal"
        sx={{
          color: "#845ec2",
        }}
        style={{
          borderColor: "#845ec2",
          borderRadius: 50,
        }}
        InputProps={{
          sx: { height: 55 },
          style: {
            fontSize: 20,
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 5,
            marginTop: 0,
            borderRadius: 50,
            color: "#845ec2",
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="search">
                <SearchIcon style={{ fill: "black" }} sx={{ fontSize: 35 }} />
              </IconButton>
            </InputAdornment>
          ),
          "& .MuiFormLabel-root": {
            fontSize: "0.8rem",
          },
        }}
        InputLabelProps={{ style: { fontSize: 90 } }}
      />

      <div
        className={`${hackathonStyle.chipfil} `}
        style={{ marginTop: "20px" }}
      >
        <Chip
          variant={selectedTag.includes("All") ? "default" : "outlined"}
          color={selectedTag.includes("All") ? "primary" : "info"}
          label="ALL"
          value="All"
          onClick={() => handleTagChange("All")}
          style={{
            width: "90px",
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag.includes("All") ? "#845ec2" : "#fff",
            borderColor: selectedTag.includes("All") ? "#845ec2" : "#845ec2",
            color: selectedTag.includes("All") ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag.includes("web") ? "default" : "outlined"}
          color={selectedTag.includes("web") ? "primary" : "info"}
          label="Web Development"
          onClick={() => handleTagChange("web")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag.includes("web") ? "#845ec2" : "#fff",
            borderColor: selectedTag.includes("web") ? "#845ec2" : "#845ec2",
            color: selectedTag.includes("web") ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag.includes("Blockchain") ? "default" : "outlined"}
          color={selectedTag.includes("Blockchain") ? "primary" : "info"}
          label="Blockchain"
          onClick={() => handleTagChange("Blockchain")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag.includes("Blockchain") ? "#845ec2" : "inherit",
            borderColor: selectedTag.includes("Blockchain") ? "#845ec2" : "#845ec2",
            color: selectedTag.includes("Blockchain") ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag.includes("Upcoming") ? "default" : "outlined"}
          color={selectedTag.includes("Upcoming") ? "primary" : "info"}
          label="Upcoming"
          onClick={() => handleTagChange("Upcoming")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag.includes("Upcoming") ? "#845ec2" : "inherit",
            borderColor: selectedTag.includes("Upcoming") ? "#845ec2" : "#845ec2",
            color: selectedTag.includes("Upcoming") ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag.includes("Beginner Friendly") ? "default" : "outlined"}
          color={selectedTag.includes("Beginner Friendly") ? "primary" : "info"}
          label="Beginner Friendly"
          onClick={() => handleTagChange("Beginner Friendly")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor:
              selectedTag.includes("Beginner Friendly") ? "#845ec2" : "inherit",
            borderColor:
              selectedTag.includes("Beginner Friendly") ? "#845ec2" : "#845ec2",
            color: selectedTag.includes("Beginner Friendly") ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag.includes("Programming") ? "default" : "outlined"}
          color={selectedTag.includes("Programming") ? "primary" : "info"}
          label="Programming"
          onClick={() => handleTagChange("Programming")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor:
              selectedTag.includes("Programming") ? "#845ec2" : "inherit",
            borderColor: selectedTag.includes("Programming") ? "#845ec2" : "#845ec2",
            color: selectedTag.includes("Programming") ? "#fff" : "#845ec2",
          }}
        />
      </div>
    </form>
  );
}

export default SearchBar;
