import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { H5, LI, UL } from '../../AbstractElements'
import SidebarSubMenu from './SidebarSubMenu'
import { RootState } from '../../ReduxToolkit/Store';
import { Pinned } from '../../Utils/Constants';
import { SidebarMenuItem } from '../../Types/Layout.type';
import { menuItems } from '../../Data/Layout/SidebarMenuItems';

export default function SidebarNav() {
    const { t } = useTranslation();
    const [activeMenu, setActiveMenu] = useState<string[]>([]);
    const { pinedMenu } = useSelector((state: RootState) => state.layout)
    const shouldHideMenu = (mainMenu: SidebarMenuItem) => {
        return mainMenu?.items?.map((data) => data.title).every((titles) => pinedMenu.includes(titles || ""));
    }

    return (
        <UL className="sidebar-menu simple-list" id="simple-bar">
            <div className="simplebar-wrapper">
                <div className="simplebar-mask">
                    <div className="simplebar-offset">
                        <div className="simplebar-content-wrapper">
                            <div className="simplebar-content">
                                <LI className={`pin-title sidebar-main-title ${pinedMenu.length > 0 ? "show" : ""} `}>
                                    <div>
                                        <H5 className="sidebar-title f-w-700">{Pinned}</H5>
                                    </div>
                                </LI>
                                {menuItems &&
                                    menuItems.map((mainMenu: SidebarMenuItem, index) => (
                                        <Fragment key={index}>
                                            <LI className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? 'd-none' : ''}`}>
                                                <div>
                                                    <H5 className={`${mainMenu.lanClass ? mainMenu.lanClass : ''} f-w-700 sidebar-title`}>{mainMenu.title}</H5>
                                                </div>
                                            </LI>
                                            <SidebarSubMenu menu={mainMenu.items} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
                                        </Fragment>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UL>
    )
}
