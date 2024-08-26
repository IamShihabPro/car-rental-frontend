import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bg from '../../assets/images/cars/tesla.avif';
import { useLoginMutation } from "@/redux/feature/user/userApi";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { setUser, TUser } from "@/redux/feature/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";

interface IFormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [login] = useLoginMutation();
    // const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<IFormData>({
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
       
        try {
            const res = await login(formData).unwrap();
            console.log(res)
            const user = verifyToken(res.token) as TUser;
            console.log(user)
            dispatch(setUser({ user: user, token: res.data.token }));
            toast.success('User Login Succesful')
          } catch (error) {
            console.log(error)
          }
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="w-full max-w-xl mx-auto shadow-lg p-10 backdrop-blur-lg bg-white/20 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-10 text-white">
                    Hello <span className="text-blue-600">Welcome</span>
                </h3>

                <form onSubmit={handleSubmit} className="py-4 px-3">
                    <div className="mb-5">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-600 text-md leading-7 text-gray-900 bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                            placeholder="Enter Your Password"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-600 text-md leading-7 text-gray-900 bg-transparent"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-600 px-4 py-2 text-white rounded-sm">Login</button>
                    </div>

                    <p className="text-gray-800 text-center mt-4">
                        Don't have an account? 
                        <Link className="ml-1 text-blue-600 font-bold" to='/signup'> Sign Up </Link>
                    </p> 
                </form>
            </div>    
        </div>
    );
};

export default Login;
