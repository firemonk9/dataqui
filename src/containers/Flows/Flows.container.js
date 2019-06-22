import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ComponentToolKit from '../../components/componentToolKit/ComponentToolKit';
import WorkArea from '../../components/WorkArea/WorkArea';
import React from 'react';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

class Flows extends React.Component {

    render() {

        return (
            <Layout>
                <Content className={'flows-container'}>
                    <Layout className={'flows-layout'}>
                        <Sider className={'toolkit-sider'} width={400}>
                            <ComponentToolKit />
                        </Sider>
                        <Content className={'workarea-content-wrapper'}>
                            <WorkArea />
                        </Content>
                    </Layout>
                </Content>
            </Layout>

        );
    }
}

export default DragDropContext(HTML5Backend)(Flows);
