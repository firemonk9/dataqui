import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
    render() {
        return(
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px', textAlign: 'center' }}
                >
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <Menu.Item key="2">Flows</Menu.Item>
                    <Menu.Item key="3">Executions</Menu.Item>
                    <Menu.Item key="4">Users</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default Navbar;
