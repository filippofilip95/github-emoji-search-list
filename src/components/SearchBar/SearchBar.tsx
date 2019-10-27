import React, {useCallback, useState} from 'react';
import debounce from 'lodash.debounce';

import style from './SearchBar.module.css';

interface SearchBarProps {
    setSearchQuery: Function
}

function SearchBar({setSearchQuery}: SearchBarProps) {
    const [value, setValue] = useState<string>('');

    const debounceLoadData = useCallback(debounce((value: string) => {
        setSearchQuery(value)
    }, 350), []);

    function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toLowerCase();

        setValue(value);
        debounceLoadData(value);
    }

    return (
        <input
            type="text"
            placeholder='Type to 🔎 for emoji...'
            value={value}
            onChange={handleFilterChange}
            className={style.searchBarInput}
        />
    );
}

export default SearchBar;