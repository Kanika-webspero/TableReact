import About from "../pages/About";
import DataTable from "../pages/DataTable";
import Home from "../pages/Home";
import Other from "../pages/Other"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const publicRoutes = [
    {
        component: < Home />,
        to: '/home'
    },
    {
        component: <About />,
        to: '/about'
    },
    {
        component: <DataTable />,
        to: '/DataTable'
    },
    {
        component: <Other />,
        to: '/other'
    }
]

export const privateRoutes = [
    {
        component: < SignIn />,
        to: '/'
    },
    {
        component: < SignUp />,
        to: '/signup'
    }
]