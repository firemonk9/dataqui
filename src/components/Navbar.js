import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
    render() {
        return(
                <nav>
                    <ul className={'nav-links'}>
                        <Link to={'/dashboard'}><li key="1">Dashboard</li></Link>
                        <Link to={'/flows'}><li key="2">Flows</li></Link>
                        <Link to={'/executions'}><li key="3">Executions</li></Link>
                        <Link to={'/users'}><li key="4">Users</li></Link>
                    </ul>
                </nav>
        )
    }
}

export default Navbar;
