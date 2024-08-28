import App from "@/App";
import ErrorPage from "@/component/ErrorPage/ErrorPage";
import TermsAndConditions from "@/component/TermsAndConditions/TermsAndConditions";
// import ProtectedRoute from "@/layout/ProtectedRoute";
import About from "@/pages/About/About";
import Cars from "@/pages/Cars/Cars";
import Contact from "@/pages/Contact/Contact";
import AddCars from "@/pages/Dashboard/AddCars/AddCars";
import AllCars from "@/pages/Dashboard/AllCars/AllCars";
import Dashboard from "@/pages/Dashboard/Dashboard/Dashboard";
import Profile from "@/pages/Dashboard/Profile/Profile";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Signup from "@/pages/SignUp/Signup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cars',
                element: <Cars/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/contact',
                element: <Contact/> 
            },
            {
                path: '/terms',
                element: <TermsAndConditions/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'addcars',
                element: <AddCars/>
            },
            {
                path: '/dashboard/profile',
                element: <Profile/>
            },
            {
                path: '/dashboard/allcars',
                element: <AllCars/>
            },
        ]
    }
  ]);