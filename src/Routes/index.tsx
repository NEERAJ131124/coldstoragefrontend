// import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LayoutRoutes from './LayoutRoutes'
import PrivateRoutes from './PrivateRoutes';
// import SignIn from '../Auth';
import VisualLogin2 from '../Components/Pages/Others/Authentication/VisualLogin2';
import { decodeToken } from '../Config/apiConfig';

export default function Routers() {
    const token = decodeToken()

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                {token ? (
                    <>
                        <Route path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                        <Route path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                    </>
                ) : (
                    ""
                )}
                <Route path={"/"} element={<PrivateRoutes />}>
                    <Route path={`/*`} element={<LayoutRoutes />} />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/login`} element={<VisualLogin2 />} />
            </Routes>
        </BrowserRouter>
    )
}