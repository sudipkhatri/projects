import React,{useEffect} from 'react';

const Alert = ({msg, removeAlert}) =>{
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            removeAlert()
        }, 3000)
        return ()=>{clearTimeout(timeOut)}
    }, []);
    return <p>{msg}</p>
}

export default Alert;