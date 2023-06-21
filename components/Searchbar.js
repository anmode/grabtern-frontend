import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css'; // Import the CSS file

import { IconButton, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import WebIcon from '@mui/icons-material/Web';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Cloud from "@mui/icons-material/Cloud";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Css, Html, Javascript } from "@mui/icons-material";
function SearchBar({ setSearchQuery, handleTagFilter }) {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    handleTagFilter(tag);
  };

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
          width: 300,
        }}
        InputProps={{
          sx: { height: 55 },
          style: {
            fontSize: 25,
            paddingBottom: 5,
            marginTop: 0,
            
          },
          '& .MuiFormLabel-root': {
            fontSize: '0.8rem',
            
          },
        }}
        InputLabelProps={{ style: { fontSize: 90 } }}
      />
      <IconButton aria-label="search">
        <SearchIcon style={{ fill: "blue" }} sx={{ fontSize: 30 }} />
      </IconButton>
      <Select
        value={selectedTag}
        onChange={handleTagChange}
        className={styles.tagSelect}
        displayEmpty
        inputProps={{ "aria-label": "Tag" }}
        sx={{ fontSize: 15 }}
      >
        <MenuItem value="" sx={{ fontSize: 20 }}>  <h2
              className="animate-charcter"
              style={{
                textTransform: "uppercase",
                backgroundImage:
                  "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
                backgroundSize: "auto auto",
                backgroundClip: "border-box",
                backgroundSize: "200% auto",
                color: "#fff",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "textclip 2s linear infinite",
                display: "inline-block",
                fontSize: "18px",
              }}
            >
All
            </h2></MenuItem>
        <MenuItem value="bookmarked"  sx={{ fontSize: 20 }}><BookmarksIcon sx={{ marginRight: "20px", fontSize: 30 }}  style={{ fill: "blue" }} /> <h2
              className="animate-charcter"
              style={{
                // textTransform: "uppercase",
                backgroundImage:
                  "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
                backgroundSize: "auto auto",
                backgroundClip: "border-box",
                backgroundSize: "200% auto",
                color: "#fff",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "textclip 2s linear infinite",
                display: "inline-block",
                fontSize: "29px",
              }}
            >
              Saved
            </h2></MenuItem>
        <MenuItem value="web"  sx={{ fontSize: 20 }}> <WebIcon sx={{ marginRight: "20px", fontSize: 30 }} style={{ fill: "blue" }} /> <h2
              className="animate-charcter"
              style={{
                textTransform: "uppercase",
                backgroundImage:
                  "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
                backgroundSize: "auto auto",
                backgroundClip: "border-box",
                backgroundSize: "200% auto",
                color: "#fff",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "textclip 2s linear infinite",
                display: "inline-block",
                fontSize: "29px",
              }}
            >
              Web Development
            </h2></MenuItem>
        <MenuItem value="Blockchain"  sx={{ fontSize: 20 }}>  <CurrencyBitcoinIcon sx={{ marginRight: "20px", fontSize: 30 }} style={{ fill: "blue" }} /> <h2
              className="animate-charcter"
              style={{
                textTransform: "uppercase",
                backgroundImage:
                  "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
                backgroundSize: "auto auto",
                backgroundClip: "border-box",
                backgroundSize: "200% auto",
                color: "#fff",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "textclip 2s linear infinite",
                display: "inline-block",
                fontSize: "29px",
              }}
            >
              Blockchain
            </h2></MenuItem>
        {/* Add more tag options if needed */}
      </Select>
    </form>
  );
}

export default SearchBar;