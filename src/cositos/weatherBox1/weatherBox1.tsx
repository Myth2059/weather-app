import Image from "next/image";


export default function WeatherBox(){
    let sunny = "/weatherIcons/sunny.jpg";
    return(
    <div className="flex">
    <Image className="m-0 bg-slate-600" alt="watafak" src={sunny} width={140} height={140} priority/>
    <img src={sunny}/>
    </div>  
    

    )


}

interface weatherBoxProps{

}