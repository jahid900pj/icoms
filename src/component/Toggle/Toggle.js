import React, { useState } from 'react';
// import { useState } from "react";
import './Toggle.css'

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="toggleContainer">
                <span style={{ color: darkMode ? "grey" : "yellow" }}></span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                {/* <span style={{ color: darkMode ? "#c96dfd" : "grey" }}></span> */}
            </div>
            <div>
                {/* <span> {darkMode ? "Dark" : "Light"}  </span> */}
            </div>
        </div>)
}

export default Toggle;