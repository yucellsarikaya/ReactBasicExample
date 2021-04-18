import React, { Component } from 'react'
import { Button, Fade } from 'reactstrap'
export default class Component1 extends Component {
    render() {
        let sayi1 = 5;
        return (
            <div>
                <div>
                    <Button color="primary" onClick={() => this.props.comp1(sayi1)} >Component1</Button>
                    <Fade tag="h5" className="mt-3">Component2ye tıklandığında oluşan değer: {this.props.secondComp}</Fade>
                </div>
            </div>
        )
    }
}
