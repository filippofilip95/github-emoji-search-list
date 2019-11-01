import React from 'react';
import style from "./EmojiList.module.css";
import Emoji from "../Emoji";
import {TEmojiList, TEmoji} from "../../types";

interface EmojiListViewProps {
    emojiList: TEmojiList | any,
    isEmojiShown: boolean
}

function EmojiListView({emojiList, isEmojiShown}: EmojiListViewProps) {
    return (
        <div className={style.emojiList} style={{display: isEmojiShown ? 'flex' : 'none'}}>
            {emojiList.map((item: TEmoji) => (
                <Emoji
                    key={item[0]}
                    name={item[0]}
                    url={item[1]}
                />
            ))}
        </div>
    );
}

export default EmojiListView;