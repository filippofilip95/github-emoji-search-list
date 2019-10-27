import React from 'react';

import EmojiList from "../EmojiList";
import TopNavBar from "../TopNavBar";

function App() {
    return (
        <>
            <header>
                <TopNavBar/>
            </header>
            <main>
                <EmojiList/>
            </main>
        </>
    );
};

export default App;
