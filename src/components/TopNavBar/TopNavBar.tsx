import React from 'react';
import SearchBar from "../SearchBar";
import ThemeSwitcher from "../ThemeSwitcher";

interface TopNavBarProps {
    setSearchQuery: Function
}

function TopNavBar({setSearchQuery}: TopNavBarProps) {
    return (
        <>
            <SearchBar setSearchQuery={setSearchQuery}/>
            <ThemeSwitcher/>
        </>
    );
}

export default TopNavBar;