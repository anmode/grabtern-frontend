import React, { useState } from 'react';
// import styles from '../styles/Searchbar.module.css'; // Import the CSS file
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
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
import Stack from '@mui/material/Stack';
function SearchBar({ setSearchQuery, handleTagFilter }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagChange = (value) => {
    setSelectedTag(value);
    handleTagFilter(value);
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
        
        }}
        
        InputProps={{
          sx: { height: 55 },
          style: {
            fontSize: 25,
            paddingBottom: 5,
            marginTop: 0,
            
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="search">
                <SearchIcon style={{ fill: "blue" }} sx={{ fontSize: 35 }} />
              </IconButton>
            </InputAdornment>
          ),
          '& .MuiFormLabel-root': {
            fontSize: '0.8rem',
            
          },
        }}
        InputLabelProps={{ style: { fontSize: 90 } }}
      />

      <div style={{ marginTop: '20px' }}>
        <Stack direction="row" spacing={2}  inputProps={{ "aria-label": "Tag" }}>
          <Chip
            variant={selectedTag === "All" ? "default" : "outlined"}
            color={selectedTag === "All" ? "primary" : "info"}
            label="ALL"
            value="All"
            onClick={() => handleTagChange("All")}
            style={{ width: "90px", height: "45px", fontSize: "20px" }}
          />
          <Chip
            variant={selectedTag === "web" ? "default" : "outlined"}
            color={selectedTag === "web" ? "primary" : "info"}
            label="Web Development"
            onClick={() => handleTagChange("web")}
            style={{ height: "45px", fontSize: "20px" }}
          />
          <Chip
            variant={selectedTag === "Blockchain" ? "default" : "outlined"}
            color={selectedTag === "Blockchain" ? "primary" : "info"}
            label="Blockchain"
            onClick={() => handleTagChange("Blockchain")}
            style={{ height: "45px", fontSize: "20px" }}
          />
          <Chip
            variant={selectedTag === "Upcoming" ? "default" : "outlined"}
            color={selectedTag === "Upcoming" ? "primary" : "info"}
            label="Upcoming"
            onClick={() => handleTagChange("Upcoming")}
            style={{ height: "45px", fontSize: "20px" }}
          />
          <Chip
            variant={selectedTag === "Beginner Friendly" ? "default" : "outlined"}
            color={selectedTag === "Beginner Friendly" ? "primary" : "info"}
            label="Beginner Friendly"
            onClick={() => handleTagChange("Beginner Friendly")}
            style={{ height: "45px", fontSize: "20px" }}
          />
          <Chip
            variant={selectedTag === "Programming" ? "default" : "outlined"}
            color={selectedTag === "Programming" ? "primary" : "info"}
            label="Programming"
            onClick={() => handleTagChange("Programming")}
            style={{ height: "45px", fontSize: "20px" }}
          />
        </Stack>
      </div>
    </form>
  );
}

export default SearchBar;
