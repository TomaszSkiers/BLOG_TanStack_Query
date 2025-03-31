import { JSX } from "react";
import { Navigate } from "react-router-dom";



export const ProtectedRouteDashboard = ({children}: {children: JSX.Element}) =>{
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

    if (!token) {
        return <Navigate to='/login' replace />
    }

    return children
}