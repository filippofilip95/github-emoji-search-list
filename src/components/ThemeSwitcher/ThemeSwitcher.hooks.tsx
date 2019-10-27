import {useEffect, useRef, useState} from "react";
// @ts-ignore
import Timeout from 'NodeJS';

export function useToggleTheme(): [boolean, Function] {
    const [checked, setChecked] = useState<boolean>(true);

    const timeout = useRef<Timeout>();

    useEffect(() => {

        const emojiList = document.getElementById('emoji-list');

        if (emojiList) {
            emojiList.style.display = 'none';
            timeout.current! = setTimeout(() => {
                emojiList.style.display = 'flex';
            }, 200);
            document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light');
        }

        const currentTimeout = timeout.current;

        return () => clearTimeout(currentTimeout);

    }, [checked]);


    return [checked, setChecked];
}