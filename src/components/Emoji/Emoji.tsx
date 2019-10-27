import React from 'react';
import style from './Emoji.module.css';

interface EmojiProps {
    name: string,
    url: string,
}

function Emoji({name, url,}: EmojiProps) {
    return (
        <div className={style.emoji}>
            <div className={style.emojiInner}>
                <img src={url} className={style.emojiImg} alt={name}/>
                <code className={style.emojiName}>{`:${name}:`}</code>
            </div>
        </div>
    );
}

export default Emoji;