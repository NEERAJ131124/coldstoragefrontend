/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badges, H6, LI, UL } from '../../AbstractElements'
import { MenuListType, SidebarItemTypes } from '../../Types/Layout.type'
import { RootState } from '../../ReduxToolkit/Store';
import { handlePined } from '../../ReduxToolkit/Reducers/Layout/LayoutReducer';
import { Href } from '../../Utils/Constants';
import SvgIcon from '../../Utils/CommonComponents/CommonSvgIcons';

export default function SidebarSubMenu({ menu, setActiveMenu, activeMenu, level, className }: MenuListType) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { pinedMenu } = useSelector((state: RootState) => state.layout);
    const location = useLocation();
    const ActiveNavLinkUrl = (path?: string, active?: boolean) => {
        return location.pathname === path ? (active ? active : true) : "";
    };
    const shouldSetActive = ({ item }: SidebarItemTypes) => {
        var returnValue = false;
        if (item?.path === location.pathname) returnValue = true;
        if (!returnValue && item?.children) {
            item?.children.every((subItem) => {
                returnValue = shouldSetActive({ item: subItem });
                return !returnValue;
            });
        }
        return returnValue;
    };
    const handleClick = ((item: string) => {
        const temp = activeMenu;
        temp[level] = item !== temp[level] ? item : "";
        setActiveMenu([...temp]);
    })
    useEffect(() => {
        menu?.forEach((item: any) => {
            let gotValue = shouldSetActive({ item });
            if (gotValue) {
                let temp = activeMenu;
                temp[level] = item.title;
                setActiveMenu(temp);
            }
        });
    }, []);

    return (
        <>
            {menu?.map((item, index) => (
                <LI key={index} className={`${level === 0 ? "sidebar-list" : ""} ${pinedMenu.includes(item.title || "") ? "pined" : ""}  
                ${(item.children
                        ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true)
                        : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title
                        ? "active"
                        : ""
                    } `}
                >
                    {level === 0 && (<i className="fa-solid fa-thumbtack" onClick={() => dispatch(handlePined(item.title))} />)}
                    <Link
                        className={`${!className && level !== 2 ? "sidebar-link " : item.type === "sub" ? "submenu-title" : ""} 
                        ${(item.children
                                ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true)
                                : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""
                            }`}
                        to={item.path ? item.path : Href}
                        onClick={() => handleClick(item.title || "")}
                    >
                        {item.icon && (
                            <SvgIcon className='stroke-icon' iconId={item.icon} />
                        )}
                        <H6>{item.title}</H6>
                        {item.badge ? <Badges color='primary'>{item.badgeName}</Badges> : ''}
                        {item.children && (activeMenu[level] === item.title ? (
                            <i className="iconly-Arrow-Down-2 icli"></i>
                        ) : (
                            <i className="iconly-Arrow-Right-2 icli"></i>
                        ))}
                    </Link>
                    {item.children && (
                        <UL className={`simple-list ${level !== 0 ? "nav-sub-childmenu submenu-content" : "sidebar-submenu "}`} style={{
                            display: `${(item.children
                                ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "block" : "none"
                                }`
                        }}
                        >
                            <SidebarSubMenu menu={item.children} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} className="sidebar-submenu" />
                        </UL>
                    )}
                </LI >
            ))
            }
        </>
    )
}
