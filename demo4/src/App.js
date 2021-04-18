import React, { Component } from 'react'
import Component1 from "./Component1";
import Component2 from "./Component2";
let x =0;
let y =0;
export default class App extends Component {
  comp1 = (sayi1) => {
    x = x+sayi1;
    this.setState({ firstComp : x});
  }
  comp2 = (sayi2) => {
    y = y+sayi2;
    this.setState({ secondComp: y});
  }

  state ={ firstComp: "", secondComp: ""};
  render() {
    return (
      <div className="App">
        <Component1 secondComp={this.state.secondComp} comp1={this.comp1}/>
        <hr /> <hr /> <hr />
        <Component2 firstComp={this.state.firstComp} comp2={this.comp2}/>
      </div>
    );
  }
}
