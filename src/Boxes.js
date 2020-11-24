import './App.css';
import React from 'react';

class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    bgColor: ""
    }
  }

  boxColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({ bgColor: "#" +randomColor })
  }

  render(){
  return (<div className="box App-logo" onMouseOver={this.boxColor} style={{backgroundColor: this.state.bgColor}}></div>)
  }
}

export default Boxes;