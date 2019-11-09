import React from 'react';
import style from './Toast.module.css'

interface ToastProps {
    url: string,
    name: string
}

function Toast({url, name}: ToastProps) {
    return (
        <div className={style.toast}>
            <img src={url} className={style.emojiImg} alt={`emoji-${name}`}/>
            <code className={style.emojiName}>:{name}:</code>
            <span> Copied to clipboard!</span>
        </div>
    );
}

export default Toast;