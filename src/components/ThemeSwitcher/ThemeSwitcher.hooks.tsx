import {useEffect, useRef, useState} from "react";
// @ts-ignore
import Timeout from 'NodeJS';

export function useToggleTheme(setIsEmojiShown: Function): [boolean, Function] {
    const [checked, setChecked] = useState<boolean>(true);
    const timeoutToHide = useRef<Timeout>();
    const timeoutToChangeTheme = useRef<Timeout>();

    useEffect(() => {
        setIsEmojiShown(false);

        timeoutToHide.current! = setTimeout(() => {
            document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light');

            timeoutToChangeTheme.current! = setTimeout(() => {
                setIsEmojiShown(true);
            }, 200);

        }, 200);


        const timeout1 = timeoutToHide.current;
        const timeout2 = timeoutToChangeTheme.current;

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }

    }, [checked]);


    return [checked, setChecked];
}