import WeatherBox from "@/cositos/weatherBox1/weatherBox1";

export default function Prueba(){
    let date = new Date();
    date.setDate( date.getDate() + 2);
    return (<WeatherBox min={40} max={50} date={date}/>)
}