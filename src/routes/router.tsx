import App from "@/App";
import BookingForm from "@/component/BookingForm/BookingForm";
import ErrorPage from "@/component/ErrorPage/ErrorPage";
import TermsAndConditions from "@/component/TermsAndConditions/TermsAndConditions";
// import ProtectedRoute from "@/layout/ProtectedRoute";
import About from "@/pages/About/About";
import CarDetails from "@/pages/Cars/CarDetails";
import Cars from "@/pages/Cars/Cars";
import Contact from "@/pages/Contact/Contact";
import AddCars from "@/pages/Dashboard/AddCars/AddCars";
import AllBookings from "@/pages/Dashboard/AllBookings/AllBookings";
import AllCars from "@/pages/Dashboard/AllCars/AllCars";
import Dashboard from "@/pages/Dashboard/Dashboard/Dashboard";
import MyBookings from "@/pages/Dashboard/MyBookings/MyBookings";
import Payment from "@/pages/Dashboard/Payment/Payment";
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
                path: '/cars/:id',
                element: <CarDetails/>
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
            {
                path: '/cars/:id/booking',
                element: <BookingForm/>
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
            {
                path: '/dashboard/allbookings',
                element: <AllBookings/>
            },
            {
                path: '/dashboard/mybookings',
                element: <MyBookings/>
            },
            {
                path: '/dashboard/mybookings/payment/:id',
                element: <Payment/>
            },
        ]
    }
  ]);