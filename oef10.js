/**
 * een startgetal wordt telkens verhoogt met 2.
 * dit tot je aan het eindgetal komt.
 * in de console verschijnen telkens de bekomen nummers.
 * Na de lus geef je onderstaande zin in de console
 *
 * Het startgetal __ werd x aantal keer verhoogt met 2
 * x wordt vervangen door het aantal keer.
 *
 * Indien x een oneven getal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een oneven aantal keer gebeurt.
 *
 * Indien x een even gatal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een even aantal keer gebeurt.
 *
 */

let startgetal = 2;
const eindgetal = 12;

while (startgetal <= eindgetal) {
  startgetal += 2;
  aantalkeer = eindgetal % startgetal;
}
if (eindgetal % startgetal == 0) {
  console.log("even");
} else {
  console.log("oneven");
}
console.log(
  `Het startgetal ${startgetal} werd ${aantalkeer} aantal keer verhoogt met 2`
);
