import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        debugger
        return(
                <nav>
                    <ul className={'nav-links'}>
                        <NavLink activeClassName="selected" to={'/dashboard'}><li key="1">Dashboard</li></NavLink>
                        <NavLink activeClassName="selected" to={'/flows'}><li key="2">Flows</li></NavLink>
                        <NavLink activeClassName="selected" to={'/executions'}><li key="3">Executions</li></NavLink>
                        <NavLink activeClassName="selected" to={'/users'}><li key="4">Users</li></NavLink>
                    </ul>
                </nav>
        )
    }
}

export default Navbar;
