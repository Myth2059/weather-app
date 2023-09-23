import WeatherBox from "@/components/weatherBox1/WeatherBox";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Prueba() {
  const { data, loading, getForecast } = useRetrieveData();

  useEffect(() => {
    getForecast("Neiva");
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  let date = new Date();
  date.setDate(date.getDate() + 2);
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((data, i) => {
        return (
          <WeatherBox
            key={i + "forecast"}
            min={data.day.mintemp_c}
            max={data.day.maxtemp_c}
            date={new Date(data.date + "T00:00")}
          />
        );
      })}
    </div>
  );
}

function useRetrieveData() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<forecastday[]>([]);

  function getForecast(city: string) {
    setLoading(true);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=7d8075d689b848f2ad515246231909&q=${city}&days=6`
      )
      .then((response) => {
        let datasco: forecastday[] = [...response.data.forecast.forecastday];

        setData(datasco);
        setLoading!(false);
      });
  }

  return { loading, data, getForecast };
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
