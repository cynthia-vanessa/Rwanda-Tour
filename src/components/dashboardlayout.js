import React, {useState} from "react";
import"./dashboardlayout.css";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
// import { convertLegacyProps } from "antd/lib/button/button";

const { Header, Sider, Content } = Layout
const Dashlayout=({children})=>{
const [collapsed,setCollapsed]=useState(false);


const toggle=()=>{
  setCollapsed(!collapsed)

}

  return(
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <              Menu.Item key="1" icon={<UserOutlined />}>
<Link to ="../dashboard/Newtour">Create tour</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to ="../dashboard/Alltours">Manage tours</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to ="../home">Log out</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
            
          </Content>
        </Layout>
      </Layout>
      // <div className="dashboardcontainer">{children}

      // </div>
  )


}

export default Dashlayout;