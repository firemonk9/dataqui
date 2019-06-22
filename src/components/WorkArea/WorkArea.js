import React from 'react';
import {DropTarget} from "react-dnd";

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }

}
class WorkArea extends React.Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        return connectDropTarget(<div>Work Area</div>)
    }
}

export default  DropTarget('foo', {}, collect)(WorkArea);
