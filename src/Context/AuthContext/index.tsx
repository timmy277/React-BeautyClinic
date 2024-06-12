// import React, { useEffect, useState } from "react";
// import { auth } from "../../Firebase/firebase.js";
// import { onAuthStateChanged } from "../../Firebase/auth.js"; 

// const AuthContext = React.createContext(null);

// export function useAuth() {
//     return React.useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, initializeUser );
//         return unsubscribe;
//     }, []);

//     async function initializeUser(user) {
//         if (user){
//             setCurrentUser({... user});
//             setUserLoggedIn(true);
//         }
//         else{
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     const value = {
//         currentUser ,
//         userLoggedIn,
//         setCurrentUser,
//     };
//     return(
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }