import React from 'react'

function Header({prevIsDarkMode, onDarkModeClick}) {
    
    return (
        <header>
          <h2>Shopster</h2>
          <button onClick={onDarkModeClick}>
            {prevIsDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
    );
}

export default Header