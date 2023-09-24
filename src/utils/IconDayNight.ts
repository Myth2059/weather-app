export default function iconDayNight(prop: string): string {
  //esta es una funcion que ayuda a cambiar los iconos segun la hora :),
  //lo que hace es remplazar en la url de weatherApi /day/icon por /night/icon
  const hours = new Date().getHours();

  if (hours >= 18) {
    return prop.replace("day", "night");
  }
  return prop;
}
