import React from 'react';
import './ThemeSwitcher.scss'
import {useToggleTheme} from "./ThemeSwitcher.hooks";

interface ThemeSwitcherProps {
    setIsEmojiShown: Function
}

function ThemeSwitcher({setIsEmojiShown}: ThemeSwitcherProps) {
    const [checked, setChecked] = useToggleTheme(setIsEmojiShown);

    return (
        <div className="themeWrapper">
            <div className="toggle">
                <input
                    className="toggle-input"
                    type="checkbox"
                    checked={checked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                />
                <div className="toggle-bg"/>
                <div className="toggle-switch">
                    <div className="toggle-switch-figure"/>
                    <div className="toggle-switch-figureAlt"/>
                </div>
            </div>
        </div>
    );
}

export default ThemeSwitcher;