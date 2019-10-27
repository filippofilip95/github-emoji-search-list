import React from 'react';
import {useGithubApi} from "./EmojiList.hooks";
import EmojiListView from "./EmojiList.view";

interface EmojiListProps {
    searchQuery: string
}

function EmojiList({searchQuery}: EmojiListProps) {
    const {loading, error, data} = useGithubApi('/emojis');

    if (error) {
        return <code>{error}</code>
    }

    if (loading) {
        return <code>Loading...</code>
    }

    if (data) {
        const emoji = Object.entries(data);

        const filteredEmoji = emoji.filter(item => item[0].includes(searchQuery));

        if (!filteredEmoji.length) {
            return <code>Nothing found</code>
        }

        return <EmojiListView emojiList={filteredEmoji}/>
    }

    return null
}

export default EmojiList;