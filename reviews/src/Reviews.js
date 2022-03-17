import React, {useState} from 'react';
import './App.css';
import data from './data.js';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa' ;

const Reviews = () =>{
    const[index, setIndex] = useState(0);
    const {name, image, description} = data[index];
    
    return(
        <div className="container">
            <FaQuoteRight/>
            <img src = {image} alt = {name}/>
            <p>{name}</p>
            <p>{description}</p>
            <div className="btn-controls">
                <button onClick={()=>{
                    index === 0 ? setIndex(data.length-1) :setIndex(index - 1);
                }}>
                <FaChevronLeft/>
                </button>
                <button onClick={()=> {
                    index === data.length-1 ? setIndex(0) :setIndex(index + 1);
                }}>
                    <FaChevronRight/>
                    </button>
                    
            </div>
        </div>
    )
}

export default Reviews;