import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
       <Search search={"search a song"}/>
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
