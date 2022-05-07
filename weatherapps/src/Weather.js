import './App.css';


const Weather = ({data}) =>{

    const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    return(
        <div className="Weather-App"> 
            <div className='titles'>
                <h1>{data.name}</h1>
            </div>
            <div className='description'>
                <img src = {imgUrl} alt = "Weather Description" />
                <div className='info'>
                    <h1>{data.weather[0].description}</h1>
                    <p>Temperature: {data.main.temp} °c</p>
                    <p>Min: {data.main.temp_min} °c | Max : {data.main.temp_max} °c</p>
                    <p>Sunrise: {data.sys.sunrise} | Sunset: {data.sys.sunset}</p>
                </div>   
            </div>
            {/* <footer className='footer'>
                <h1 >Designed and Developed By Sudip Khatri</h1>
                <p>{new Date().getFullYear()}</p>
            </footer> */}
        </div>
    )
}

export default Weather;