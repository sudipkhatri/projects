import React, {useState, useEffect} from 'react';
import Tours from './Tours';

const url = "https://course-api.com/react-tours-project"
const App =() =>{

  const[loading, setLoading] = useState(true);
  const[tours, setTours] = useState([]);

  const removeTour = (id) =>{
        const newTour = tours.filter((tour)=>{
            return tour.id != id;
        });
        setTours(newTour);
        }

  const fetchTours = async () =>{
    setLoading(true);
    try{
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    //console.log(tours);
    }
    catch(error){
      console.log(error);
    }
    
  }
  useEffect(()=>{
    fetchTours();
  }, [])
  if(loading){
      return <h1> Loading... </h1>
    }
  if(tours.length === 0){
    return <main className='container'>
      <h1>No Tours Left</h1>
      <button className='btn' onClick={fetchTours}>Refresh</button>
    </main>
  }
  return (
    <main className='container'>
        <Tours tours = {tours} removeTour = {removeTour}/>
    </ main>
    )}

    export default App;