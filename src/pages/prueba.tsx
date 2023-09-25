import CurrentBox from "@/components/currentBox/CurrentBox";
import WeatherBox from "@/components/weatherBox/WeatherBox";
import useRetrieveData from "@/hooks/useRetrieveData";

import { useEffect } from "react";

export default function Prueba() {
  const { data, loading, getForecast,current } = useRetrieveData();

  useEffect(() => {
    getForecast("Salta");
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex gap-4  h-full">
      <div className="w-full max-w-sm border">
      {<CurrentBox min={data[0].day.mintemp_c} max={data[0].day.maxtemp_c} current={current?.temp_c}  imgSrc={data[0] ? "https:"+data[0].day.condition.icon : undefined} text={data[0] ? data[0].day.condition.text : ""}/>}
      </div>
      {data.map((data, i) => {
        if (i>0) {
          return (
            <WeatherBox
              key={i + "forecast"}
              min={data.day.mintemp_c}
              max={data.day.maxtemp_c}
              date={new Date(data.date + "T00:00")}
              imgSrc={"https:" + data.day.condition.icon}
            />
          );
        }
        
      })}
    </div>
  );
}
