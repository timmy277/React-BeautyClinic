import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export interface IAuthRouteProps {}

export interface IAuthRouteProps {
    children: React.ReactNode;
}
const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({children}) => {
    const { currentUser, loading } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (!loading && !currentUser) {
            navigate('/login');
        }
    }, [currentUser, loading, navigate]);
    
    if (loading) return <p>Loading...</p>;

    return <>{children}</>
}

export default AuthRoute;    