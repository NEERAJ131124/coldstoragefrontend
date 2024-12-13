import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { routes } from './Route'
import { authRoutes } from './AuthPaths'

export default function LayoutRoutes() {
    return (
        <>
            <Routes>
                {routes.map(({ path, element }, i) => (
                    <Route element={<Layout />} key={i}>
                        <Route path={path} element={element} />
                    </Route>
                ))}
                {authRoutes.map(({ path, element }, i) => (
                    <Route key={i} path={path} element={element} />
                ))}
            </Routes>
        </>
    )
}