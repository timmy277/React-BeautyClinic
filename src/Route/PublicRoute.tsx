// PublicRoute.tsx

import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
    children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken ? <Navigate to="/" /> : (children as React.ReactElement);
};

export default PublicRoute;
