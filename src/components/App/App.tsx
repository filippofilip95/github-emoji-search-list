import React, {useState} from 'react';

import EmojiList from "../EmojiList";
import ThemeSwitcher from "../ThemeSwitcher";
import SearchBar from "../SearchBar";
import GithubIcon from "../GithubIcon";

function App() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            <nav>
                <menu>
                    <GithubIcon color='white'/>
                    <h1>
                        GitHub Emoji List Search
                    </h1>
                    <SearchBar setSearchQuery={setSearchQuery}/>
                    <ThemeSwitcher/>
                </menu>
            </nav>
            <main>
                <EmojiList searchQuery={searchQuery}/>
            </main>
        </>
    );
};

export default App;
