
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/ClientLayout";
import Feature from "../pages/Feature";
import General from "../pages/General/General";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Gallery from "../pages/Gallery/Gallery";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Team from "../pages/Team/Team";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import AuthRoute from './AuthRoute';
import { AuthProvider } from "../Context/AuthContext";
import PublicRoute from "./PublicRoute";

const RouteCustom  = () => {
    return (
    <>
    <AuthProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index path="/" element={
                    <AuthRoute><General /></AuthRoute>
                } />
                <Route path="/Feature" element={<Feature />} />
                <Route path="/About" element={<About />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Team" element={<Team />} />
            </Route>
                <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/Register" element={<PublicRoute><Register /></PublicRoute>} />
        </Routes>
    </AuthProvider>
    </>
    )
}

export default RouteCustom
