import './App.css';
import React from 'react';

class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    bgColor: "",
    bgSpin: ""
    };
  }

  boxColorSpin = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({ bgColor: "#" + randomColor });
    this.setState({ bgSpin: "Color-spin infinite 5s linear" });
  }

  boxNoSpin = () => {
    this.setState({ bgSpin: "" });
  }

  render(){
  return (<div className="box" onMouseOver={this.boxColorSpin} style={{backgroundColor: this.state.bgColor, animation: this.state.bgSpin}} onMouseLeave={this.boxNoSpin}></div>)
  }
}

export default Boxes;