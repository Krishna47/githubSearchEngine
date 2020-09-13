import React from 'react'
import "./themeToggler.scss";

/**
 * 
 * @param {*} theme  the default user prefered theme.This value is stored in local storage
 */
const ThemeToggler = ({theme,  toggleTheme }) => {
    const isChecked = theme === 'dark';
    return (
            <div className="toggle checkcross">            
                <span>Prefer LightTheme?</span>
                <input id="checkcross" type="checkbox" onClick={toggleTheme} defaultChecked={isChecked}/>
                <label className="toggle-item" htmlFor="checkcross">
                    <div className="check"></div>
                </label>
            </div>
    )
}

export default ThemeToggler
