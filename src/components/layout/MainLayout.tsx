import { Layout, Menu, type MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { Children } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.routes';


const MainLayout = () => {
    return (
      <Layout style={{height:"100vh"}}>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <h4>the main content should show here</h4>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    );
};

export default MainLayout;