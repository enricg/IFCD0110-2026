// Coincidència de cadenes de caracters
function coincideix() {
  let text = "Visita CET Penedès";
  let resultat = text.match(/CET/);
  console.log(resultat);
}
coincideix();

// Reemplaçament de cadenes
function reemplaça() {
  let text = "Visita CET Penedès";
  let resultat = text.replace(/CET/i, "Beep");
  console.log(resultat);
}
reemplaça();

// Cerca de cadenes
function cercar() {
  let text = "Visita CET Penedès";
  let n = text.search(/CET/);
  console.log(n);
}
cercar();

// Coincideix amb OR
function coincideixOR() {
  let text = "negre, blanc, vermell, verd, blau, groc";
  let resultat = text.match(/vermell|marró|blau/g);
  console.log(resultat);
}
coincideixOR();

// Banderes
// g <-- global
function cercaG() {
  let text =
    "En Pinxo li va dira en Panxo: vols que et punxi amb un punxó? i en Panxo li va dir a en Pinxo: punxa'm però a la panxa no.";
  const patro = /nx/g;

  let resultat = text.match(patro);
  console.log(resultat);
}
cercaG();

// i
function cercaI() {
  let text = "Visita cEt Penedès";
  const patro = /CET/i;
  let resultat = text.match(patro);
  console.log(resultat);
}
cercaI();

// Metacaracters
// Metacaracter \d

function metacaracterD() {
  let text = "Vull el 180%";
  const patro = /\d/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
metacaracterD();

// Metacaracter \w (paraula)
function metacaracterW() {
  let text = "Dona'm el 100%";
  const patro = /\w/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
metacaracterW();

// Metacaracter \s (espais)
function metacaracterS() {
  let text = "Dona'm el 100%";
  const patro = /\s/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
metacaracterS();

// Quantificadors
// (?)
function quantifInterrogant() {
  let text = "1, 100 o 1000?";
  const patro = /10?/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
quantifInterrogant();

// Assercions
// (^) accent circunflex
function circunflex() {
  const patro = /^CET/;
  let text = "CET Penedès.";
  let resultat = patro.test(text);
  console.log(resultat);
}
circunflex();

// ($) dollar
function dollar() {
  const patro = /CET$/;
  let text = "Penedès CET";
  let resultat = patro.test(text);
  console.log(resultat);
}
dollar();

// Classes de caracters
// [0-9]
function numeros() {
  let text = "Més de 1000 vegades o de 2000";
  const patro = /[0-5]/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
numeros();

//-------------------------
// Banderes
function coincideixD() {
  let text = "aaaabb";
  const patro = /(aa)(bb)/d;
  let resultat = text.match(patro);
  let indexos = resultat.indices;
  console.log(resultat);
  console.log(indexos);
}
coincideixD();
/******************************/
/* revisar bandera d amb exemple més clar */
/******************************/

function coincideixRetCarro() {
  let text = "Linia\nLinia.";
  const patro = /Linia./gs;
  let resultat = text.match(patro);
  console.log(text);
  console.log(resultat);
}
coincideixRetCarro();

function multilinia() {
  let text = "Is th\nis all there \nis";
  const patro = /^is/gim;
  let resultat = text.match(patro);
  console.log(resultat);
}
multilinia();

// bandera sticky
function sticky() {
  let text = "abc def ghi";
  const patro = /\w+/y;
  patro.lastIndex = 4;
  let resultat = text.match(patro);
  console.log(resultat);
}
sticky();

function llistaNegra() {
  let text = "Hola que tal bon dia, ja per fi és divendres";
  const patro = /[^aeiou]/g;
  let resultat = text.match(patro);
  console.log(text);
  console.log(resultat);
}
llistaNegra();

function iniciParaula() {
  let text = "HELLO, LOOK AT YOU!";
  const patro = /\bLO/;
  let resultat = text.search(patro);
  console.log(resultat);
}
iniciParaula();

function paraula() {
  let text =
    "Hello, what is your name? My name is Iris.  Ah ok, I thougth your name was Laquisha";
  const patro = /\bis\b/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
paraula();

function coinciCondi() {
  let text =
    "CET Penedès no és dels mateixos que els del CET Garraf, i no sé si existeix CET Barcelonés. CET Penedès és l'original.";
  const patro = /CET(?!= Penedès)/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
coinciCondi();

function jcoinciCondi() {
  let text =
    "CET Penedès no és dels mateixos que els del CET Garraf, i no sé si existeix CET Barcelona. CET Penedès és l'original";
  // const patro = /CET(?=Penedès)/g;
  const patro = /CET(?= Penedès)/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
jcoinciCondi();

function grups() {
  let text = "L'Anna estima en Jofre";
  const patro = /(\w+) estima (\w+)/;
  let resultat = text.match(patro);
  console.log(resultat);
}
grups();

function data() {
  const patro = /(\d{4})-(\d{2})-(\d{2})/;
  const text = "2026-05-21";
  const resultat = text.match(patro);
  console.log(resultat);
}
data();

// Quantificadors
// mes (+)

function mes() {
  let text =
    "Hola bon dia! Hola CET Penedès. Al futbol la gent canta looolololololo lololo lololo lololoooo";
  const patro = /lo+/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
mes();

function asterisc() {
  let text = "Hola bon dia. El futbol canten loooolololo la le li lo lo llll";
  const patro = /lo*/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
asterisc();

function interrogant() {
  let text = "1, 100 o 1000?";
  const patro = /10?/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
interrogant();

function nOcurrencies() {
  let text = "100, 1000 o 10000?";
  //const patro = /\d{4}/;
  //const patro = /\d{3,4}/g;
  const patro = /\d{3,}/g;
  let resultat = text.match(patro);
  console.log(resultat);
}
nOcurrencies();
