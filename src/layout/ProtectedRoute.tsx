import { logout, useCurrentToken } from '@/redux/feature/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type TProtectedRoute = {
  children: ReactNode;
  role?: string;
};

const ProtectedRoute: React.FC<TProtectedRoute> = ({ children, role }) => {
    const token = useAppSelector(useCurrentToken);
    let user;
  
    if (token) {
      user = verifyToken(token);
    }
  
    const dispatch = useAppDispatch();
  
    if (role !== undefined && role !== user?.role) {
      dispatch(logout());
      return <Navigate to="/login" replace={true} />;
    }
    if (!token) {
      return <Navigate to="/login" replace={true} />;
    }
  
    return children;
};

export default ProtectedRoute;
