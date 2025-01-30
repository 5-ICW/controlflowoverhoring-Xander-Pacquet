/**
 * Je bouwt verder op de opgave 4.
 *
 *  * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 *
 * stilte geeft echter enkel een output als de radio aan staat
 * licht uit geeft enkel otuput als het licht al aan was
 */
const commando = "licht uit";
const radio = true;
const lichtAan = true;
switch (
  commando //dit is hetzelfde als oefening4 behalve kijk ik nu als er een radio aan is en het licht uit is en als dit klopt mogen de functies aan.
) {
  case "open deur":
    console.log("deur gaat open");
    break;
  case "muziek":
    console.log("muziek start met spelen");
    break;
  case "stilte":
    if (radio == true) {
      console.log("Muziek gaat uit");
    }
    break;
  case "licht aan":
    console.log("licht gaat aan");
    break;
  case "licht uit":
    if (lichtAan == true) {
      console.log("licht gaat uit");
    }

  default:
    break;
}
