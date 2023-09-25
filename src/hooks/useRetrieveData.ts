import axios from "axios";
import { useState } from "react";

export default function useRetrieveData() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<forecastday[]>([]);
  const [current, setCurrent] = useState<current>();

  function getForecast(city: string) {
    setLoading(true);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=7d8075d689b848f2ad515246231909&q=${city}&days=6`
      )
      .then((response) => {
        const current: current = response.data.current;
        const datasco: forecastday[] = [...response.data.forecast.forecastday];
        const presure:number = response.data.current.pressure_mb;

        setData(datasco);
        setCurrent(current);
        setLoading(false);
      });
  }

  return { loading, data, getForecast, current };
}
interface current{
    temp_c:number;
    pressure_mb:number;
    vis_km:number;
    wind_kph:number;
    wind_dir:string;
}
interface forecastday {
  date: string;
  day: day;
}
interface day {
  condition: condition;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
}

interface condition {
  icon: string;
  text: string;
}
