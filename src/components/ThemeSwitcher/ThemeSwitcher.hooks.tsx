import {useEffect, useRef, useState} from "react";
// @ts-ignore
import Timeout from 'NodeJS';
import {
    loadDocumentTheme,
    saveAndSetDocumentTheme,
} from "../../helpers/theme.utils";

export function useToggleTheme(setIsEmojiShown: Function): [boolean, Function] {
    const [checked, setChecked] = useState<boolean>(loadDocumentTheme() !== 'light');
    const timeoutToHide = useRef<Timeout>();
    const timeoutToChangeTheme = useRef<Timeout>();
    const isInitialMount = useRef<boolean>(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {

            setIsEmojiShown(false);

            timeoutToHide.current! = setTimeout(() => {
                saveAndSetDocumentTheme(checked ? 'dark' : 'light');

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
        }
    }, [checked]);

    return [checked, setChecked];
}
