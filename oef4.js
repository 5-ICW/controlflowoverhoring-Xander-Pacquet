/**
 * Maak zelf de nodige variabelen aan voor onderstaande probleem
 *
 * Een huis is geprogrammeerd op woorden.
 * Een gebruiker spreekt een woord uit en op basis van het woord
 * gebeurt een actie (deze acties worden uitgeschreven in de console)
 * onderstaande commando's kunnen gegeven worden
 * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 *
 */
const commando = "licht uit";
switch (commando) {
  case "open deur": //als het woordje deur opkomt moet de console deur gaat open ingeven en zo werkt dit voor al de rest
    console.log("deur gaat open");
    break;
  case "muziek":
    console.log("muziek start met spelen");
    break;
  case "stilte":
    console.log("Muziek gaat uit");
    break;
  case "licht aan":
    console.log("licht gaat aan");
    break;
  case "licht uit":
    console.log("licht gaat uit");

  default:
    break;
}
