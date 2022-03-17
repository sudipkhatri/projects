import React, {useState} from 'react';
import List from  './List.js'
import data from './data';
import './App.css'

const App = () =>{

    const[person, updatePerson] = useState(data);

    return (
        <div className = 'Primary-container'>
            <h1 className='unique'>{person.length} Birthday today</h1>
            <List person = {person}/>
            <button onClick = {()=>updatePerson([])} > ClearAll </button>
        </div>
    )
}

export default App;
