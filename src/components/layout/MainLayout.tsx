import { Layout, type MenuProps } from 'antd';
const { Header, Content, Footer,  } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { Children } from 'react';
import {  Outlet } from 'react-router-dom';
import SideBar from './SideBar';


const MainLayout = () => {
    return (
      <Layout style={{height:"100vh"}}>
       <SideBar></SideBar>
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <h4>the main content should show here</h4>
          <Outlet />
        </Content>
       
      </Layout>
    </Layout>
    );
};

export default MainLayout;