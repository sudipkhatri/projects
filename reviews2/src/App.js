import { useState } from 'react';
import text from './data.js';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(count);
    let amount = parseInt(count);
    if(amount <= 0){
      amount = 1;
    }
    if(amount >= 8){
      amount = 8;
    }
    setItem(text.slice(0, amount));

  }
  return (
    <div className="App">
      <div className='input'>
        <form className='' onSubmit ={handleSubmit}>
            <label htmlFor ="paragraphs">Paragraphs</label>
             <input type = "number" value = {count} name = "amount" onChange={(e)=>setCount(e.target.value)}/> 
             <button type = "submit">Generate</button> 
        </form>
       
        <div className='output'>
          {
            item.map((obj, index)=>{
              return(
                <article key = {index} className='information'>
                 <p>{obj}</p>
                </article>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
