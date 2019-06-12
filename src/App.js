import Navbar from './components/Navbar';
import React from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;


class App extends React.Component {

    render() {
        return (
            <Layout className="layout">
                <Navbar />
                <Content style={{ padding: '10px 0px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>DataQ</Footer>
            </Layout>
        );
    }
}

export default App;
