import About from "../pages/About";
import DataTable from "../pages/DataTable";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Other from "../pages/Other"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const privateRoutes = [
    {
        component: Home ,
        to: '/home'
    },
    {
        component: About ,
        to: '/about'
    },
    {
        component: DataTable ,
        to: '/DataTable'
    },
    {
        component: Other ,
        to: '/other'
    }
]

export const publicRoutes = [
    {
        component: LandingPage ,
        to: '/'
    },
    {
        component: SignIn ,
        to: '/signin'
    },
    {
        component: ForgotPassword ,
        to: '/forgotpassword'
    },
    {
        component: SignUp ,
        to: '/signup'
    }
]