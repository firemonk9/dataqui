import React, {PureComponent} from 'react';
import map from 'lodash/map';
import DraggableComponent from './Draggable-component';

class ComponentList extends PureComponent {

    handleDrop = (id) => {
        console.log('handleDrop Log', id);
    }

    render() {
        const content = map(this.props.list, item =>
            <DraggableComponent
                key={item.id}
                item={item}
                handleDrop = {this.handleDrop}
            />);
        return <div className={'drag-components-wrapper'}>
            {content}
        </div>
    }
}

export default ComponentList;
