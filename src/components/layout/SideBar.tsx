import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sideBarItemGenerator } from '../../utils/sideBarItemGenerator';
import { adminPath } from '../../routes/admin.routes';
import { facultyPath } from '../../routes/faculty.routes';
import { studentPath } from '../../routes/student.routes';

const userRole = {
  ADMIN:'admin',
  FACULTY:'faculty',
  STUDENT:'student',
}
const SideBar = () => {
  const role = 'faculty';
  let sidebarItem;

  switch(role){
    case userRole.ADMIN:sidebarItem = sideBarItemGenerator(adminPath, userRole.ADMIN);
    break;
    case userRole.FACULTY:sidebarItem = sideBarItemGenerator(facultyPath, userRole.FACULTY);
    break;
    case userRole.STUDENT:sidebarItem = sideBarItemGenerator(studentPath, userRole.STUDENT);
    break;

    default:
      break;
  }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div 
        style={{
          color:"#fff",
          height:"3rem",
          textAlign:"center",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}

        ><h1>PH UNI</h1>
         </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItem} />
      </Sider>
    );
};

export default SideBar;