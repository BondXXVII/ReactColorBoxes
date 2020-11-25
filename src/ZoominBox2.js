import './App.css';
import React from 'react';

class ZoominBox2 extends React.Component {
  constructor() {
    super();
    this.state = {
    bgColor: ""
    };
  }

  boxColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({ bgColor: "#" + randomColor });
  }

  render(){
  return (
  <div className="box zoom" onMouseOver={this.boxColor} style={{backgroundColor: this.state.bgColor, top: -333, right: 0, animation: "fly 22s linear infinite"}}></div>
  )}
}

setInterval(() => {document.body.style = 'background: darkgreen;';}, 5000);
setInterval(() => {document.body.style = 'background: darkred;';}, 10000);
setInterval(() => {document.body.style = 'background: dimgray;';}, 15000);
setInterval(() => {document.body.style = 'background: dimblue;';}, 25000);

export default ZoominBox2;