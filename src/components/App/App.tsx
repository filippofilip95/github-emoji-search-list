import React, {useState} from 'react';

import EmojiList from "../EmojiList";
import TopNavBar from "../TopNavBar";

function App() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            <header>
                <TopNavBar setSearchQuery={setSearchQuery}/>
            </header>
            <main>
                <EmojiList searchQuery={searchQuery}/>
            </main>
        </>
    );
};

export default App;
