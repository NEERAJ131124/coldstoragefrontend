import React, { useState } from 'react'
import { LI } from '../../../AbstractElements'
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons';
import { Href } from '../../../Utils/Constants';

export default function FullScreen() {
    const [fullScreen, setFullScreen] = useState(false);

    const fullScreenHandler = (isFullScreen: boolean) => {
        setFullScreen(isFullScreen);
        if (isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document?.exitFullscreen();
        }
    };
    return (
        <LI>
            <a className="full-screen" href={Href} onClick={() => fullScreenHandler(!fullScreen)}>
                <SvgIcon iconId="scanfull" />
            </a>
        </LI>
    )
}