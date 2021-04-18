import React, { Component } from 'react'
import { Button, Fade } from 'reactstrap'
export default class Component2 extends Component {
    render() {
        let sayi2 = 10;
        return (
            <div>
                <div>
                    <Button color="primary" onClick={() => this.props.comp2(sayi2)}>Component2</Button>
                    <Fade tag="h5" className="mt-3">Component1ye tıklandığında oluşan değer: {this.props.firstComp}</Fade>
                </div>
            </div>
        )
    }
}
