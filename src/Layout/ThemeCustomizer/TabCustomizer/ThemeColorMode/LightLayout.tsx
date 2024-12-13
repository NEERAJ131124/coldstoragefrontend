import React from 'react'
import { useDispatch } from 'react-redux';
import { addSideBarBackGround } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Image } from '../../../../AbstractElements';
import { Href } from '../../../../Utils/Constants';
import { dynamicImage } from '../../../../Utils';

export default function LightLayout() {
    const dispatch = useDispatch();
    const handleMixLayout = (data: string) => {
        dispatch(addSideBarBackGround(data));
        document.body.className = data
    };

    return (
        <div className="color-img">
            <Image className="img-fluid" src={dynamicImage(`customizer/light.png`)} alt="" />
            <div className="customizer-overlay"></div>
            <div className="button color-btn light-setting" onClick={() => handleMixLayout('light')}>
                <a href={Href}>LIGHT</a>
            </div>
        </div>
    )
}