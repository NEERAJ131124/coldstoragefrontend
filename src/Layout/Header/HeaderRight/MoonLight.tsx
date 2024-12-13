import React, { useState } from 'react'
import { LI } from '../../../AbstractElements';
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons';
import { Href } from '../../../Utils/Constants';

export default function MoonLight() {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = (name: boolean) => {
        if (name) {
            document.body.classList.remove("dark-only");
            document.body.classList.add("light");
            setDarkMode(!darkMode);
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark-only");
            setDarkMode(!darkMode);
        }
    };
    return (
        <LI>
            <a className={`dark-mode ${darkMode ? "active" : ""}`} onClick={() => darkModeHandler(darkMode)} href={Href}>
                <SvgIcon iconId='moondark' />
            </a>
        </LI>
    )
}
