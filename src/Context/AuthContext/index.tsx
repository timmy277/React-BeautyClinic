import { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase";

const AuthContext = React.createContex();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((auth, initializeUser ) => {
            return unsubscribe;
        })
    }, []);

    async function initializeUser() {
        if (user){
            setCurrentUser(... user);
        }
    }
}