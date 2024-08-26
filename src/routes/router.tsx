import App from "@/App";
import ErrorPage from "@/component/ErrorPage/ErrorPage";
import TermsAndConditions from "@/component/TermsAndConditions/TermsAndConditions";
import Contact from "@/pages/Contact/Contact";
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
  ]);