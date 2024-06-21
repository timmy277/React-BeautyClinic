// PublicRoute.tsx

import { Navigate, useLocation } from 'react-router-dom';

interface PublicRouteProps {
    children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const accessToken = localStorage.getItem('accessToken');
    return accessToken ? <Navigate to="/location" /> : (children as React.ReactElement);
};

export default PublicRoute;
