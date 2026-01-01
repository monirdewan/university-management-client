import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sideBarItemGenerator } from '../../utils/sideBarItemGenerator';
import { adminPath } from '../../routes/admin.routes';

const SideBar = () => {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBarItemGenerator(adminPath, "admin")} />
      </Sider>
    );
};

export default SideBar;