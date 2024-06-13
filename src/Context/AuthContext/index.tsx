import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// const AuthContext = React.createContext(null);


interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;   
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
    children: ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children })=>{
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return(
        <AuthContext.Provider value={{currentUser , userLoggedIn, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export const useAuth = (): AuthContextType => {
    const context = React.useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}