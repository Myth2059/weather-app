import iconDayNight from "@/utils/IconDayNight";
import Image from "next/image";

export default function CurrentBox(props: currentBoxProps) {
  const sunny = "/weatherIcons/sunny.jpg";
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center">
      <input type="text" />

      <Image
        className="my-4"
        alt="state"
        src={props.imgSrc ? iconDayNight(props.imgSrc) : sunny}
        width={100}
        height={100}
        priority
      />
      <p>
        {props.current} <span>C°</span>
      </p>
      <div className="flex gap-4">
        <p>
          {props.min} <span>C°</span>
        </p>
        <p>
          {props.max} <span>C°</span>
        </p>
      </div>
      <p>{props.text}</p>
    </div>
  );
}

interface currentBoxProps {
  current?: number;
  min: number;
  max: number;
  imgSrc?: string;
  text: string;
}
