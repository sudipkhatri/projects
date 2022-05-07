import { useEffect } from "react";

const Address = (props) =>{
    //console.log(props);
    const apiKey = "2c40a84186a25b4706aa96c744b7459c";
    let lat = props.lat;
    let lon = props.lon;

  
        let url = `http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${lat},${lon}`;

        const fetchApi = async() =>{
            try{
                const req = await fetch(url);
                const res = await req.json();
                console.log(res);
                const add = res.data[0].locality;
                console.log(add);
                return add;
            }
            catch(err){
                return err;
            }
        
        }
  // var x = fetchApi()     
            useEffect(()=>{
                fetchApi()
                }, []);
            }
    
    

export default Address;
    
   






