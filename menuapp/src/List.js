import React,{useState} from 'react';
import data from './data.js'
//import './App.css'

const List = () =>{

    const[items, setItems] = useState(data);
    const title = [ 'all', ...new Set(items.map((one)=>{return one.category}))];
    const[category, setCategory] = useState(title);

    const filterItems = (categories) =>{
        if(categories === 'all'){
            setItems(data);
            return;
        }
        const newItems = data.filter((item) =>  item.category === categories);
        console.log(newItems);
        setItems(newItems);
    }
    return(
        <div className='menu'>
            <div className='head-content'>
                {
                    category.map((categories, index)=>{
                        return <button key = {index} onClick={()=>filterItems(categories)}>
                            {categories}
                        </button>
                    })
                }
            </div>
            <div className='body-content'>
                {
                    items.map((obj)=>{
                        const { id, title, price, img, desc} = obj;
                        return <div key ={id} className='display-obj'>
                                    <img src = {img} alt ={title}/>
                                    <h1> {title} </h1>
                                    <p> {desc} </p>
                                    <p> {price} </p>
                                </div>

                    })
                }
            </div>
        </div>
    )
}

export default List;