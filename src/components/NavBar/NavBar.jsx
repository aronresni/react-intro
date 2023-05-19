import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import Style from "./NavBar.modules.css"
import { NavLink } from "react-router-dom"
const NavBar = (props) => {
    return (
        <div className={Style.div}>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
};

export default NavBar