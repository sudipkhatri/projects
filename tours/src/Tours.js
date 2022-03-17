import React, {useState} from 'react';
import './App.css'


const Tours = ({tours, removeTour}) =>{

    const[readmore, setReadMore] = useState(false);
    
    return(
        <div className = 'Main-div'>
            <h1> Tours </h1>
            <div className = 'secondary-div'> 
                {
                 tours.map((tours) =>{
                    const {id, name, info, image, price} = tours;
                    return(
                        <div key = {id} className='tour-div'>
                            <img src = {image} alt = {name} />
                            <div className='insidetour'>
                            <h1> {name} </h1>
                            <p> {readmore ? info:info.substring(0, 200)}
                            <button className='eventDescription' onClick={()=>setReadMore(!readmore)}>{readmore ? 'show less' : 'show more'}
                            </button>
                            </p>
                            <p>{price}</p>
                            <button className='btn' onClick={()=>removeTour(id)}>Not Interested</button>
                            </div>
                        </div>
                    )
                 })
                }
            </div>
        </div>
    )
}

export default Tours;