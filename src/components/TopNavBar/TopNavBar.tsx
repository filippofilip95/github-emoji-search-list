import React from 'react';
import SearchBar from "../SearchBar";

interface TopNavBarProps {
    setSearchQuery: Function
}

function TopNavBar({setSearchQuery}: TopNavBarProps) {
    return (
        <SearchBar setSearchQuery={setSearchQuery}/>
    );
}

export default TopNavBar;