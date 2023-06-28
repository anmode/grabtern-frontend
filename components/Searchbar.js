import React, { useState } from "react";
import hackathonStyle from "../styles/hackathon.module.css";
// import styles from '../styles/Searchbar.module.css'; // Import the CSS file
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import { IconButton, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider } from "@mui/material/styles";
function SearchBar({ setSearchQuery, handleTagFilter }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagChange = (value) => {
    setSelectedTag(value);
    handleTagFilter(value);
  };
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
          variant={selectedTag === "All" ? "default" : "outlined"}
          // color={selectedTag === "All" ? "primary" : "info"}
          label="ALL"
          value="All"
          onClick={() => handleTagChange("All")}
          style={{
            width: "90px",
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag === "All" ? "#845ec2" : "#fff",
            borderColor: selectedTag === "All" ? "#845ec2" : "#845ec2",
            color: selectedTag === "All" ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag === "web" ? "default" : "outlined"}
          color={selectedTag === "web" ? "primary" : "info"}
          label="Web Development"
          onClick={() => handleTagChange("web")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag === "web" ? "#845ec2" : "#fff",
            borderColor: selectedTag === "web" ? "#845ec2" : "#845ec2",
            color: selectedTag === "web" ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag === "Blockchain" ? "default" : "outlined"}
          color={selectedTag === "Blockchain" ? "primary" : "info"}
          label="Blockchain"
          onClick={() => handleTagChange("Blockchain")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor:
              selectedTag === "Blockchain" ? "#845ec2" : "inherit",
            borderColor: selectedTag === "Blockchain" ? "#845ec2" : "#845ec2",
            color: selectedTag === "Blockchain" ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag === "Upcoming" ? "default" : "outlined"}
          color={selectedTag === "Upcoming" ? "primary" : "info"}
          label="Upcoming"
          onClick={() => handleTagChange("Upcoming")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor: selectedTag === "Upcoming" ? "#845ec2" : "inherit",
            borderColor: selectedTag === "Upcoming" ? "#845ec2" : "#845ec2",
            color: selectedTag === "Upcoming" ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag === "Beginner Friendly" ? "default" : "outlined"}
          color={selectedTag === "Beginner Friendly" ? "primary" : "info"}
          label="Beginner Friendly"
          onClick={() => handleTagChange("Beginner Friendly")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor:
              selectedTag === "Beginner Friendly" ? "#845ec2" : "inherit",
            borderColor:
              selectedTag === "Beginner Friendly" ? "#845ec2" : "#845ec2",
            color: selectedTag === "Beginner Friendly" ? "#fff" : "#845ec2",
          }}
        />
        <Chip
          variant={selectedTag === "Programming" ? "default" : "outlined"}
          color={selectedTag === "Programming" ? "primary" : "info"}
          label="Programming"
          onClick={() => handleTagChange("Programming")}
          style={{
            height: "45px",
            fontSize: "20px",
            backgroundColor:
              selectedTag === "Programming" ? "#845ec2" : "inherit",
            borderColor: selectedTag === "Programming" ? "#845ec2" : "#845ec2",
            color: selectedTag === "Programming" ? "#fff" : "#845ec2",
          }}
        />
      </div>
    </form>
  );
}

export default SearchBar;
