import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class Demo extends Component {
    state = {
        numbers: [
            { number: 0 },
            { number: 1 },
            { number: 2 },
            { number: 3 },
            { number: 4 },
            { number: 5 },
            { number: 6 },
            { number: 7 },
            { number: 8 },
            { number: 9 }
        ],
        currentNumber: "",
        sayi: 0
    };

    collection = (sayac) => {
        this.state.sayi = this.state.sayi + sayac.number;
        this.setState({ currentCategory: this.state.sayi });
    }
    extraction = (sayac) => {
        this.state.sayi = this.state.sayi - sayac.number;
        this.setState({ currentCategory: this.state.sayi });
    }
    bump = (sayac) => {
        this.state.sayi = this.state.sayi * sayac.number;
        this.setState({ currentCategory: this.state.sayi });
    }
    Divide = (sayac) => {
        this.state.sayi = this.state.sayi / sayac.number;
        this.setState({ currentCategory: this.state.sayi });
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.state.numbers.map(sayac => (
                            <ListGroupItem>
                                {sayac.number}&emsp;&emsp;&emsp;
                                <button onClick={() => this.collection(sayac)}>+</button>&emsp;
                                <button onClick={() => this.extraction(sayac)} >-</button>&emsp;
                                <button onClick={() => this.bump(sayac)}>*</button>&emsp;
                                <button onClick={() => this.Divide(sayac)} >/</button>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>Sonuç: {this.state.currentCategory}</h4>
            </div>
        )
    }
}
