import { useEffect, useState } from 'react';
import './App.css';

const url = "https://course-api.com/react-tabs-project";
const company = [];

function App() {

const [data, setData] = useState([]);
const [val, setVal] = useState(1);

const fetchData = async() =>{
try{
    const req = await fetch(url);
    const res = await req.json();
    setData(res);
    data.map((res)=>{
       company.unshift(res.title);

    })
   
    console.log(company);
}
catch(error){
  console.log(error);
}
}
useEffect(()=>{
  fetchData();
},[]);

console.log(data);
// const {title, duties, dates} = data[val];
// console.log(title);
const filterJobs = (ord) =>{
  const newItems = data.filter((ord)=>ord.order === ord);
  setData(newItems);
  console.log(newItems);
}
  return (
    <div className="App-header">
      <div className='App-header'>
        {
        data.map((any, index) =>{
          const {title, order} = any;
          return (
            <div key = {index}>
            <button onClick={()=>filterJobs(order)}> {title} </button>
            </div>
          )
        })
      }
      </div>
     
      
    </div>
  );
}

export default App;
