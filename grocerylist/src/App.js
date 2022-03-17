import { useState } from "react";
import Alert from "./Alert.js";
import List from "./List.js";
import './App.css';

function App() {
  const[item, setItem] = useState('');
  const[list, setList] = useState([]);
  const[edit, setEdit] = useState(false);
  const[editId, setEditId] = useState(null);
  const[alert, setAlert] = useState({show: false, msg:'', type: ''})

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(item);
    if(!item){
      setAlert({show:true, msg: 'please enter a value', type: 'danger'})
    }
    else if(item && edit){

    }
    else{
      const newItems = {id:new Date().getTime().toString(), title: item};
      setList([...list, newItems]);
      setItem('');
      console.log(list);
    }
  }
  const showAlert = (show=false, msg="", type = "")=>{
    setAlert({show, msg, type})

  }
  const clearItems =()=>{
    showAlert(true, 'Empty List');
    setList([]);
  }

  return(
      <div className="App">
        <div className="Form-ctrl"> 
        {alert.show && <Alert {...alert} removeAlert ={showAlert}/>}
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="List"> List </label>
                <input type = "text" value = {item} onChange = {(e)=>setItem(e.target.value)}/>
                <button type = "submit" className="btn">{edit ? 'edit' : 'submit'}</button>
            </form>
        </div>
        {list.length > 0 && (<div className="container">
          <List items = {list}/>
            <button onClick = {clearItems}>ClearAll</button>
         
        </div>)}

      </div>
  );
 
}

export default App;
















 // const[data, setData] = useState([]);
  // const [values, updateValue] = useState('');

  // const handleSubmit =(e)=>{
  //   e.preventDefault();
    
  //   // const newItems = value.map((val)=>{
  //   //   return val;
  //   // })
  //   setData(values)
    
    
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <form className="form" onSubmit={handleSubmit}>
  //         <label htmlFor="list">List: </label>
  //         <input type="text"  name = "list"  value = {values} onChange={(e)=>updateValue(e.target.value)}/>
  //         <button type = "submit">Add</button> 
  //       </form>
  //     </header>
  //     <div className="displayList">

  //     </div>
  //   </div>
  // );