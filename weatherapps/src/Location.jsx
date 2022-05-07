import {useState, useEffect} from 'react';
import Address from './Address.js'

const Location = () =>{

   // const [address, setAddres]     = useState("");
    

//      console.log();
//   let location = "Sydney";
//   const apiKey = "77af1b8c68065e197f51ef23b29f4b75";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; 
  
//   const fetchData = async() =>{
//     try{
//       const req = await fetch(url);
//       const res = await req.json();
//       //console.log(res);   
//     }
//     catch(error){
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     fetchData()
//   }, []);

 return(
     <div>
        <Address latitude = {latitude} longitude = {longitude}/>
     </div>
 )

    
}

export default Location;





