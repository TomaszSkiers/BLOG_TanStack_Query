import { JSX } from "react";
import { Navigate } from "react-router-dom";
import  {useAuth} from '../hooks/useAuth'



export const ProtectedRouteDashboard = ({children}: {children: JSX.Element}) =>{
    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return children
}

