import React from 'react'
import { Href } from '../../../../Utils/Constants'
import { useDispatch } from 'react-redux';
import { addSideBarBackGround } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function MixLayout() {
    const dispatch = useDispatch();
    const handleMixLayout = (data: string) => {
        dispatch(addSideBarBackGround(data));
        document.body.className = data
    };
    return (
        <div className="color-img">
            <Image className="img-fluid" src={dynamicImage(`customizer/mix.png`)} alt="" />
            <div className="customizer-overlay"></div>
            <div className="button color-btn mix-setting" onClick={() => handleMixLayout('dark-sidebar')}>
                <a href={Href}>Mix</a>
            </div>
        </div>
    )
}
