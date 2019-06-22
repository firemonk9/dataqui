import React, {PureComponent} from 'react';
import map from 'lodash/map';
import { Icon } from 'antd';

class ComponentList extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const content = map(this.props.list, item => {
            return(
                <div key={item.id}>
                    <Icon type="file" style={{ fontSize: '100px', color: '#08c', width: '50%' }}/>
                    <span style={{ color: '#08c', width: '50%' }} className={'component-id'}>{item.label}</span>
                </div>
            )
        })
        return <div>
            {content}
        </div>
    }
}

export default ComponentList;
