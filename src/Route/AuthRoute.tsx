// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export interface IAuthRouteProps {}

export interface IAuthRouteProps {
    children: React.ReactNode;
}
const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({children}) => {
    // const { currentUser, loading } = useAuth();
    // const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    return accessToken ? children : <Navigate to="Login" />;

    // useEffect(() => {
    //     if (!loading && !currentUser) {
    //         navigate('/Login');
    //     }
    // }, [currentUser, loading, navigate]);
    
    // if (loading) return <p>Loading...</p>;

    // return <>{children}</>
}

export default AuthRoute;    