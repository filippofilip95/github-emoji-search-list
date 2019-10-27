import React, {useState} from 'react';
import './ThemeSwitcher.scss'

function ThemeSwitcher() {
    const [checked, setChecked] = useState<boolean>(true);

    const handleChange = (e: any) => {
        document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
        setChecked(e.target.checked)
    };

    return (
        <div className="themeWrapper">
            <div className="toggle">
                <input
                    className="toggle-input"
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
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