import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import SidebarNav from './SidebarNav'
import { useSelector } from 'react-redux'
import { RootState } from '../../ReduxToolkit/Store'
import ConfigDB from '../../Config/ThemeConfig'

export default function Sidebar() {
    const { sideBarToggle } = useSelector((state: RootState) => state.layout)
    const wrapper = ConfigDB.settings.sidebar.type;
    const [margin, setMargin] = useState(0);
    const [leftArrow, setLeftArrow] = useState(true);
    const sidebarIconType = useSelector((state: RootState) => state.themeCustomizer.sideBarIconType);
    const sideBarIcon = sidebarIconType || ConfigDB.settings.sidebar.iconType;

    const scrollToRight = () => {
        if (margin > -3000) {
            setMargin((prevMargin) => prevMargin - 500);
            setLeftArrow(false);
        }
    };
    const scrollToLeft = () => {
        setMargin((prevMargin) => prevMargin + 500);
        if (margin === -600) {
            setMargin(0);
            setLeftArrow(true);
        }
    };
    return (
      
            <aside className={`page-sidebar ${sideBarToggle ? 'close_icon' : ''} ${sideBarIcon === 'iconcolor-sidebar' ? 'iconcolor-sidebar' : ''}`} data-sidebar-layout={sideBarIcon}>
                <div className={`left-arrow ${leftArrow ? "disabled" : ""}`} id="left-arrow" onClick={scrollToLeft}><ArrowLeft /></div>
                <div className="main-sidebar" id="main-sidebar" style={{ marginLeft: margin + "px" }}>
                    <SidebarNav />
                </div>
                {(wrapper === "horizontal-sidebar") && (<div className='right-arrow' onClick={scrollToRight} id="right-arrow"><ArrowRight /></div>)}
            </aside>
    )
}