import React from 'react';
import {useGithubApi} from "./EmojiList.hooks";
import EmojiListView from "./EmojiList.view";
import {filterEmoji} from "./EmojiList.utils";

interface EmojiListProps {
    searchQuery: string,
    isEmojiShown: boolean
}

function EmojiList({searchQuery, isEmojiShown}: EmojiListProps) {
    const {loading, error, data} = useGithubApi('/emojis');

    if (error) {
        return <code>{error}</code>
    }

    if (loading) {
        return <code>Loading...</code>
    }

    if (data) {
        const filteredEmoji = filterEmoji(data, searchQuery);

        if (!filteredEmoji.length) {
            return <code>Nothing found</code>
        }

        return <EmojiListView emojiList={filteredEmoji} isEmojiShown={isEmojiShown}/>
    }

    return null
}

export default EmojiList;