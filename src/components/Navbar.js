import React from "react"
import logo from "../images/react-facts-logo.png"

const Navbar = () => {
    return(
        <nav>
            <img src={logo} className="nav-logo" alt=""/>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar