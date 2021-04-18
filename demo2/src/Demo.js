import React, { Component } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'

export default class Demo extends Component {
    state = {
        categories: [
            { categoriesId: this.props.info.data1},
            { categoriesId: this.props.info.data2},
            { categoriesId: this.props.info.data3},
            { categoriesId: this.props.info.data4}]
    };
    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.state.categories.map(sayac => (
                            <ListGroupItem >{sayac.categoriesId}</ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}
