import React, {useState} from 'react';
import List from './List.js';
import './App.css';

function App() {
  //const [info, setInfo] = useState(data);
  return (
    <div className="App">
      
      <div className="content">
        <h1>Menu App</h1>
        <List/>
      </div>
    </div>
  );
}

export default App;
