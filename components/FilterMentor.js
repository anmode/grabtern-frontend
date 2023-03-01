import React, { useState } from "react";
import styles from "../styles/filterMentor.module.css";

function FilterMentor(props) {
  const [filter, setFilter] = useState("All");
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   onSearch(query);
  // };

  const onFilterValueChange = (e) => {
    props.filterValueSelected(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="filterArea">
        <select name={filter} id="type" onChange={onFilterValueChange}>
          <option value="All">All</option>
          <option
            value="Google Summer of Code 2022">
            GSOC
          </option>
          <option value="ISRO(Indian Space Research Organization)">ISRO</option>
          <option value="Mitacs GRI, iTribe, Freelance, Startups, etc.">
            MITACS
          </option>
        </select>
      </div>
      {/* <form className={styles.searchForm} onSubmit={handleFormSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form> */}
    </>
  );
}

export default FilterMentor;
