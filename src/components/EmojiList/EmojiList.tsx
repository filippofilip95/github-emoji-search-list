import React from 'react';
import {useGithubApi} from "./EmojiList.hooks";
import EmojiListView from "./EmojiList.view";

function EmojiList() {
    const {loading, error, data} = useGithubApi('/emojis');

    if (error) {
        return <code>{error}</code>
    }

    if (loading) {
        return <code>{loading}</code>
    }

    if (data) {
        return <EmojiListView emojiList={Object.entries(data)}/>
    }

    return null
}

export default EmojiList;