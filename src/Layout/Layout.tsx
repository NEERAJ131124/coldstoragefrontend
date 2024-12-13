/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'
import Taptop from './Taptop'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { RootState } from '../ReduxToolkit/Store'
import Header from './Header'
import ThemeCustomizer from './ThemeCustomizer'
import { useDispatch } from 'react-redux'
import { setSideBarToggle } from '../ReduxToolkit/Reducers/Layout/LayoutReducer'
import { addSidebarTypes } from '../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer'

export default function Layout() {
    const { sideBarToggle } = useSelector((state: RootState) => state.layout)
    const { sidebar_types } = useSelector((state: RootState) => state.themeCustomizer);
    const dispatch = useDispatch();

    const updateSidebarBasedOnWidth = () => {
        const windowWidth = window.innerWidth;
        if (sidebar_types === "compact-wrapper") {
            if (windowWidth <= 1200) {
                dispatch(setSideBarToggle(true));
            } else {
                dispatch(setSideBarToggle(false));
            }
        }
        else if (sidebar_types === "horizontal-wrapper") {
            if (windowWidth <= 992) {
                dispatch(setSideBarToggle(true));
                dispatch(addSidebarTypes('compact-wrapper'));
            } else {
                dispatch(setSideBarToggle(false));
                dispatch(addSidebarTypes('horizontal-wrapper'))
            }
        }
    };
    useEffect(() => {
        updateSidebarBasedOnWidth();
        window.addEventListener("resize", () => {
            updateSidebarBasedOnWidth();
        });
    }, [sidebar_types]);

    return (
        <>
            <Taptop />
            <Loader />
            <div className={`page-wrapper ${sideBarToggle ? "compact-wrapper sidebar-open" : sidebar_types}`} id="pageWrapper">
                <Header />
                <div className="page-body-wrapper">
                    <Sidebar />
                    <Outlet />
                    <Footer />
                </div>
            </div>
            <ThemeCustomizer />
        </>
    )
}
