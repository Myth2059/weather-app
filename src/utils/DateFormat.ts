import "moment/locale/es";
import moment from "moment";

export default function dateToWord(date: Date): string {
    //definimos el idioma de moment
    moment.locale("es");
    //Creamos una nueva fecha con la fecha actual
    let hoy = new Date();
    //seteamos las fechas con horas iguales para que no haya problema
    hoy.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    //le sumamos un dia a la fecha actual para saber si la fecha entregada es de mañana o siguiente
    hoy.setDate(hoy.getDate() + 1);
  
    if (hoy.getTime() === date.getTime()) {
      return "Mañana";
    } else {
      let fullDate = moment(date).format("ddd[,] D MMM");
      //nos toca convertir la primera letra a mayuscula por que moment odia el español
      return fullDate.charAt(0).toUpperCase() + fullDate.slice(1);
    }
  }