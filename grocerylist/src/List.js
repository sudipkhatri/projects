import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

const List = (list) =>{
    return(
        <div className='displayList'>
            {
                list.map((item) =>{
                    const {id, title} = item;
                    return (
                        <div key = {id}>
                            <p>{title}</p>
                            <div>
                                <button>{FaEdit}</button>
                                <button>{FaTrash}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;