import React from 'react';

import style from './App.module.css';
import SearchBar from "../SearchBar";

const App: React.FC = () => {
    return (
        <div className={style.app}>
            <header>
                <SearchBar/>
            </header>
        </div>
    );
};

export default App;
