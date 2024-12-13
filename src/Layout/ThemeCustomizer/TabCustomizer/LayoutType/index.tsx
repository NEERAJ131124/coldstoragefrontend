import React from 'react'
import { H4, P } from '../../../../AbstractElements'
import { FormGroup, Input, Label } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../ReduxToolkit/Store';
import { setLayoutType } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { layoutTypeData } from '../../../../Data/Layout/ThemeCustomizer';
import { LayoutTypeTitle } from '../../../../Utils/Constants';

export default function LayoutType() {
    const { layout_type } = useSelector((state: RootState) => state.themeCustomizer)
    const dispatch = useDispatch();
    const handleLayout = (layout: string) => {
        dispatch(setLayoutType(layout));
        if (layout === 'rtl') {
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'rtl';
        } else if (layout === 'ltr') {
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'ltr';
        } else if (layout === 'box-layout') {
            document.body.classList.remove('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.add('box-layout');
            document.body.classList.remove('offcanvas');
            document.documentElement.dir = 'ltr';
        }
    };
    return (
        <div className="mb-3 p-2 rounded-3 b-t-primary border-3">
            <div className="theme-layout mb-2">
                <H4>{LayoutTypeTitle}</H4>
                <P>{'Choose between 3 different layout types.'}</P>
            </div>
            <div className="radio-form checkbox-checked">
                {layoutTypeData.map((item) => (
                    <FormGroup className={`${item.class}-setting ${layout_type === item.type ? 'active' : ''}`} key={item.id} onClick={() => handleLayout(item.type)} check>
                        <Input id={`flexRadioDefault${item.id}`} type="radio" name="flexRadioDefault" defaultChecked={item.check ? true : false} />
                        <Label htmlFor={`flexRadioDefault${item.id}`} check>{item.label}</Label>
                    </FormGroup>
                ))}
            </div>
        </div>
    )
}