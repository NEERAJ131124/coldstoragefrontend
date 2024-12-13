import React from 'react'
import ConfigDB from '../../../../Config/ThemeConfig';
import { useDispatch } from 'react-redux';
import { addSidebarIconType } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { H4, LI, P, UL } from '../../../../AbstractElements';
import { Input, Label } from 'reactstrap';
import { sidebarIconList } from '../../../../Data/Layout/ThemeCustomizer';
import { SidebarIconTitle } from '../../../../Utils/Constants';
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function SidebarIcon() {
    const sideBarIconType = ConfigDB.settings.sidebar.iconType;
    const dispatch = useDispatch();
    const handleSideBarIconType = (type: string) => {
        dispatch(addSidebarIconType(type));
    };
    return (
        <div className="mb-3 p-2 rounded-3 b-t-primary border-3">
            <div className="sidebar-icon mb-2">
                <H4>{SidebarIconTitle}</H4>
                <P>{'Choose between 2 different sidebar icon.'}</P>
            </div>
            <div className="sidebar-body form-check radio ps-0">
                <UL className="radio-wrapper simple-list flex-row">
                    {sidebarIconList.map((item) => (
                        <LI className={`${item.class}-svg ${sideBarIconType === item.iconClass ? 'active' : ''}`} key={item.id} onClick={() => handleSideBarIconType(item.iconClass)}>
                            <Input id={`radio-icon${item.id}`} type="radio" name="radio2" value="option2" defaultChecked={item.check ? true : false} />
                            <Label htmlFor={`radio-icon${item.id}`} check>
                                <DashboardSvgIcon className='stroke-icon' iconId='stroke-icons' />
                                <span>{item.text}</span>
                            </Label>
                        </LI>
                    ))}
                </UL>
            </div>
        </div>
    )
}