import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutPath } from "./admin.routes";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
    },
    {
        path:'/admin',
        element:<App />,
        children:adminRoutPath
    },
    {
        path:'/faculty',
        element:<App />,
        children:adminRoutPath
    },
    {
        path:'/student',
        element:<App />,
        children:adminRoutPath
    },
   
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/register',
        element:<Register />
    },
])


export default router;