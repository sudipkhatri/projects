import './App.css';
import { useEffect, useState} from 'react';
import Weather from './Weather.js'


function App() {

    const [latitude, setLattitude] = useState([]);
    const[longitude, setLongitude] = useState([]);
    const[data, setData]           = useState([])
    useEffect(()=>{
      const fetchData = async () =>{

      navigator.geolocation.getCurrentPosition(function(position) {
        setLattitude(position.coords.latitude.toFixed(3));
        setLongitude(position.coords.longitude.toFixed(3));
      });

      try{
      await fetch(`${process.env.React_App_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.React_App_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.clear()
       // console.log(result);
      });
      }
      catch(err){
        console.clear();
        console.log('Unable to Connet to API service')
      }
    
    }
    
    fetchData();
    },[latitude, longitude]);

  //  console.log(latitude + " " + longitude);
  // console.log(process.env.React_App_URL);
  // console.log(data);
   //console.log(process.env.url);
  return (
    <div className="App">
       {(typeof data.main != 'undefined') ? (
        <Weather data={data}/>
      ): (
        <div>null</div>
      )}
 
    </div>
  );
}

export default App;


 

  