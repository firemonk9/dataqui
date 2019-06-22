import components from './component-objects';
import ComponentList from './ComponentList';
import React, {PureComponent} from 'react';
import filter from 'lodash/filter';
import { Input } from 'antd';
const { Search } = Input;

class ComponentToolKit extends PureComponent {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.state = {list: components}
    }

    search(str) {
        debugger
        let list;
        if(str.length < 3 && this.state.list.length < components.length) {
            this.setState({list: components});
            return;
        } else if(str.length >= 3) {
            str = str.toLowerCase()
            list = filter(components, (item) => {
                return item.label.toLowerCase().indexOf(str) !== -1
            })
            this.setState({ list })
        }
    }

    render() {
        return <div className={'component-toolkit'}>
            <Search placeholder="input search text"
                    onChange={e => this.search(e.target.value)}/>
                    <ComponentList list={this.state.list}/>
        </div>
    }
}

export default ComponentToolKit;
