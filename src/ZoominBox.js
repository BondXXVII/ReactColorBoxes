import './App.css';
import React from 'react';

class ZoominBox extends React.Component {
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
  <div className="box zoom" onMouseOver={this.boxColor} style={{backgroundColor: this.state.bgColor}}></div>
  )}
}

export default ZoominBox;