import React from "react"
import img from "../images/reactjs-icon.png"

const Main = () => {
    return(
        <div className="main-background">
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="facts">
                <li className="first">Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Main