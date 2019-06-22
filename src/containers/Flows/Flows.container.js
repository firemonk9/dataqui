import ComponentToolKit from '../../components/componentToolKit/ComponentToolKit';
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Flows extends React.Component {

    render() {

        return (
            <Layout>
                <Content style={{ padding: '0 10px', minHeight: '800px' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={400} style={{ background: '#fff', border: '1px solid black' }}>
                            <ComponentToolKit />
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280, border: '1px solid black' }}>Drop Area</Content>
                    </Layout>
                </Content>
            </Layout>

        );
    }
}

export default Flows;
