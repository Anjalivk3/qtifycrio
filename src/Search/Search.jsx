import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";


function Search({ searchData, placeholder }) {
  

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}       
      >       
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required           
          />        
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>      
    </div>
  );
}

export default Search;
