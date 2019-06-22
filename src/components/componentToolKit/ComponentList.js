import React, {PureComponent} from 'react';
import map from 'lodash/map';
import { Icon } from 'antd';
import DraggableComponent from './Draggable-component';

class ComponentList extends PureComponent {

    handleDrop = (id) => {
        console.log('foo', id);
    }

    render() {
        const content = map(this.props.list, item => <DraggableComponent
            key={item.id}
            item={item}
        handleDrop = {(id) => this.handleDrop(id)}/>);
        return <div>
            {content}
        </div>
    }
}

export default ComponentList;
