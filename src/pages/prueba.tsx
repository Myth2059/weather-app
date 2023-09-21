import WeatherBox from "@/cositos/weatherBox1/weatherBox1";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Prueba(){
   const {data,loading,GetForecast} = RetrieveData();

    
    useEffect(()=>{
    GetForecast("Bogotá");
    
    
    },[]);
    useEffect(()=>{
        console.log(data);
    },[data])

    let date = new Date();
    date.setDate( date.getDate() + 2);
    return (<WeatherBox min={40} max={50} date={date}/>)
}

function RetrieveData(){
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<string>("");


  
    function GetForecast(city:string){
        setLoading(true);
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=7d8075d689b848f2ad515246231909&q=${city}&days=7`)
        .then(response => {
            setData(response.data);
            setLoading!(false);
            
        });

    }

    return {loading,data,GetForecast};
  
}
