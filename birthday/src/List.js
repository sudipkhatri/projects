import React from 'react';
import './App.css'



const List = ({person}) =>{

    return (
        <div className = 'Main-container'>
           {person.map((people)=>{
               const {id, name, age, image} = people;
               return ( 
                   <div  key = {id} className='sec-div'>
                     <img src = {image} alt = {name}/>
                     <div className = 'display' >
                        <h1>{name}</h1>
                        <p>{age}</p>
                    </div> 
                    </div>
                )
           })}
        </div>
    )
}

export default List;