import React from "react";
import logo from "../Images/logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo" />
            <span className="nav--title">my travel journal.</span>
        </nav>
    )
}