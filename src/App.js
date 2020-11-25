import './App.css';
import React from 'react';
import Boxes from './Boxes';
import ZoominBox from './ZoominBox';
import ZoominBox2 from './ZoominBox2';

class App extends React.Component {
  render() {
    const demboxes = []
    for(let i=0; i < 60; i++)
      {
        demboxes.push(<Boxes key={i}/>)
      }
    return (
      <div>
        {demboxes}
        <ZoominBox/>
        <ZoominBox2/>
      </div>
    );
  }
}

export default App;