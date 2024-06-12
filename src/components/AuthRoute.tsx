import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) =>{
        if (user) {
            setLoading(false);
            console.log("unauthorized");
        }
        else{
            console.log("authorized");
            navigate("/Login");
        }
    });

    if(loading) return <p>Loading...</p>;
    return <>{children}</>
}

export default AuthRoute;    