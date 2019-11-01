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
                    <a href="https://github.com/filippofilip95/github-emoji-search-list" target="_blank">
                        <GithubIcon/>
                        <h1>
                            GitHub Emoji List Search
                        </h1>
                    </a>
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
