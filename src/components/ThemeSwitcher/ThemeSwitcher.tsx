import React, {useState} from 'react';
import './ThemeSwitcher.scss'
import {useToggleTheme} from "./ThemeSwitcher.hooks";

function ThemeSwitcher() {
    const [checked, setChecked] = useToggleTheme();

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