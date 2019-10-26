import React from 'react';

import style from './SearchBar.module.scss';

function SearchBar() {
    return (
        <input
            type="text"
            placeholder='Type to 🔎 for emoji...'
            className={style.searchBarInput}
        />
    );
}

export default SearchBar;