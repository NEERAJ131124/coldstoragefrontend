import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { decodeToken } from '../Config/apiConfig';

export default function PrivateRoutes() {
    const token = decodeToken()
    return token ? <Outlet /> : <Navigate to={`${process.env.PUBLIC_URL}/login`} />
}