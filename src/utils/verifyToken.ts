import { TUser } from '@/redux/feature/user/userSlice';
import { jwtDecode } from 'jwt-decode';

export const verifyToken = (token: string) => {
  return jwtDecode<TUser>(token);
};