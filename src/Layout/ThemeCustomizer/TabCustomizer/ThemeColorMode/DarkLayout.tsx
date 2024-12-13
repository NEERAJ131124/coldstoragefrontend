import React from 'react'
import { useDispatch } from 'react-redux';
import { addSideBarBackGround } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Href } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function DarkLayout() {
    const dispatch = useDispatch();
    const handleMixLayout = (data: string) => {
        dispatch(addSideBarBackGround(data));
        document.body.className = data
    };
    return (
        <div className="color-img mx-1">
            <Image className="img-fluid" src={dynamicImage(`customizer/dark.png`)} alt="" />
            <div className="customizer-overlay"></div>
            <div className="button color-btn dark-setting" onClick={() => handleMixLayout('dark-only')}>
                <a href={Href}>Dark</a>
            </div>
        </div>
    )
}
