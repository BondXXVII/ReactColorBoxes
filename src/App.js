import './App.css';
import React from 'react';
import Boxes from './Boxes';

class App extends React.Component {
  render() {
    const boox = []
    for(let i=0; i < 81; i++)
      {
        boox.push(<Boxes></Boxes>)
      }
    return (
      <div className="App">
        {boox}
      </div>
    );
  }
}

export default App;