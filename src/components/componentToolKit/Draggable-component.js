import React from 'react';
import {Icon} from "antd";
import {DragSource} from "react-dnd";

const itemSource = {
    beginDrag(props) {
        return props.item;
    },
    isDragging(props, monitor) {
        // console.log(monitor.getClientOffset())
    },
    endDrag(props, monitor, component) {
        if(!monitor.didDrop()) return
        // const item = monitor.getItem();
        // console.log('monitor end drop', monitor.getClientOffset());
        // const dropResult = monitor.getDropResult()
        // console.log('monitor end drop dropResult', dropResult);

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
            <Icon
                theme="filled"
                title={item.id}
                type="file"
                style={{ fontSize: '100px', color: '#08c', width: '50%' }}
            />
            <p style={{ color: '#08c', width: '50%' }} className={'component-name'}>{item.label}</p>
        </div>)
    }
}

export default DragSource('dropArea', itemSource, collect)(DraggableComponent);
