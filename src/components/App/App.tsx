import React, {useState} from 'react';

import EmojiList from "../EmojiList";
import ThemeSwitcher from "../ThemeSwitcher";
import SearchBar from "../SearchBar";
import GithubIcon from "../GithubIcon";

function App() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isEmojiShown, setIsEmojiShown] = useState<boolean>(true);

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
                    <ThemeSwitcher setIsEmojiShown={setIsEmojiShown}/>
                </menu>
            </nav>
            <main>
                <EmojiList searchQuery={searchQuery} isEmojiShown={isEmojiShown}/>
            </main>
        </>
    );
};

export default App;
