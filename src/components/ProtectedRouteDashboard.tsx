import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/functions";



export const ProtectedRouteDashboard = ({children}: {children: JSX.Element}) =>{
    const token = getToken()

    if (!token) {
        return <Navigate to='/login' replace />
    }

    return children
}

