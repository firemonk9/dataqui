import React from 'react';
import {Icon} from "antd";
import {DragSource} from "react-dnd";

const itemSource = {
    beginDrag(props) {
        console.log(props);
        return props.item;
    },
    endDrag(props, monitor, component) {
        // return props.handleDrop(props.item.id)
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class DraggableComponent extends React.Component {

    render() {
        const { isDragging, connectDragSource, item} = this.props;
        return connectDragSource(<div className='drag-component-wrapper' key={item.id}>
            <Icon type="file" style={{ fontSize: '100px', color: '#08c', width: '50%' }}/>
            <p style={{ color: '#08c', width: '50%' }} className={'component-name'}>{item.label}</p>
        </div>)
    }
}

export default DragSource('foo', itemSource, collect)(DraggableComponent);
