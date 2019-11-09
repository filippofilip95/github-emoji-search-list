import React from 'react';
import cogoToast from "cogo-toast";
import style from './Emoji.module.css';
import {toastOptions} from "./Emoji.constants";
import Toast from "../Toast";
import {copyText} from "./Emoji.utils";

interface EmojiProps {
    name: string,
    url: string,
}

function Emoji({name, url,}: EmojiProps) {
    const handleOnClick = () => {
        copyText(`:${name}:`);
        // @ts-ignore
        cogoToast.info(<Toast url={url} name={name}/>, toastOptions);
    };

    return (
        <div className={style.emoji} onClick={handleOnClick}>
            <div className={style.emojiInner}>
                <img src={url} className={style.emojiImg} alt={name}/>
                <code className={style.emojiName}>{`:${name}:`}</code>
            </div>
        </div>
    );
}

export default Emoji;