import Navbar from './components/Navbar';
import React from 'react';
import { Layout } from 'antd';
import Dashboard from './containers/Dashboard/Dashboard.container';
import Executions from './containers/Executions/Executions.container';
import Flows from './containers/Flows/Flows.container';
import Users from './containers/Users/Users.container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {withRouter} from 'react-router-dom';
const { Content, Footer } = Layout;

const SomeComponent = withRouter(props => <App {...props}/>);


class App extends React.Component {

    render() {
        debugger
        return (
            <Router>
                <Layout className="layout">
                    <Navbar {...this.props}/>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>

                    <Route path='/' exact component={Dashboard} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/flows' component={Flows} />
                    <Route path='/users' component={Users} />
                    <Route path='/executions' component={Executions} />
                    </Content>
                    <Footer hidden style={{ textAlign: 'center' }}>DataQ</Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
