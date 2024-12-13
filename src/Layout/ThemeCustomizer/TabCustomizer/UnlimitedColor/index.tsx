import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { H4, LI, UL } from '../../../../AbstractElements'
import { unlimitedColorOptions } from '../../../../Data/Layout/ThemeCustomizer'
import { addSideBarBackGround } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';

export default function UnlimitedColor() {
    const dispatch = useDispatch();
    const [colorBackground1, setColorBackground1] = useState("");
    const [colorBackground2, setColorBackground2] = useState("");

    const handleColorChange = (primaryColor: string, secondaryColor: string) => {
        dispatch(addSideBarBackGround('light'));
        document.body.className = 'light'
        setColorBackground1(primaryColor);
        setColorBackground2(secondaryColor);
        document.documentElement.style.setProperty("--theme-default", colorBackground1);
        document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
    };
    return (
        <div className="customizer-color mb-3 p-2 rounded-3 b-t-primary border-3">
            <div className="color-picker mb-2">
                <H4>Unlimited color:</H4>
            </div>
            <UL className="layout-grid simple-list flex-row">
                {unlimitedColorOptions.map((item, index) => (
                    <LI key={index} className="color-layout" data-attr={`color-${item.name}`}
                        data-primary={item.primary} data-secondary={item.secondary}
                        onClick={() => handleColorChange(item.primary, item.secondary)}
                    >
                        <div />
                    </LI>
                ))}
            </UL>
        </div>
    )
}