import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPath } from "./admin.routes";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
    },
    {
        path:'/admin',
        element:<App />,
        children:routeGenerator(adminPath)
    },
    {
        path:'/faculty',
        element:<App />,
        children:routeGenerator(facultyPath)
    },
    {
        path:'/student',
        element:<App />,
        children:routeGenerator(studentPath)
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