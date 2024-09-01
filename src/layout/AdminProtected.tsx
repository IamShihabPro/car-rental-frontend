import { logout, useCurrentToken } from '@/redux/feature/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type TAdminProtected = {
  children: ReactNode;
};

const AdminProtected: React.FC<TAdminProtected> = ({ children }) => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    let user;

    if (token) {
        user = verifyToken(token);
    }

    // Protect the route by checking the user's role
    if (!token || user?.role !== "admin") {
        dispatch(logout());
        return <Navigate to="/login" replace={true} />;
    }

    return children;
};

export default AdminProtected;
