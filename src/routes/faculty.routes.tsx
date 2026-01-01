import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";


export const facultyPath = [
    {
        name:"Dashboard",
        path:'dashboard',
        element:<FacultyDashboard />
    },
    {
        name:"Offered Coursed",
        path:'offered-course',
        element:<OfferedCourse />
    }
]