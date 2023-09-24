import dateToWord from "@/utils/DateFormat";
import iconDayNight from "@/utils/IconDayNight";
import Image from "next/image";

export default function WeatherBox(props: weatherBoxProps) {
  const sunny = "/weatherIcons/sunny.jpg";

  return (
    <div className="flex flex-col items-center rounded shadow-sm bg-[#051235] w-28 h-28 px-1 text-white text-sm">
      <p>{dateToWord(props.date)}</p>
      <Image
        className=""
        alt="watafak"
        src={props.imgSrc ? iconDayNight(props.imgSrc) : sunny}
        width={60}
        height={60}
        priority
      />
      <div className="w-full flex justify-around ">
        <p>
          {props.max} <span className="text-slate-500 text-xs">C°</span>
        </p>{" "}
        <p>
          {props.min} <span className="text-slate-500 text-xs">C°</span>
        </p>
      </div>
    </div>
  );
}

interface weatherBoxProps {
  min: number;
  max: number;
  date: Date;
  imgSrc?: string;
}
