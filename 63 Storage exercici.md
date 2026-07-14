## Exemple amb variables CSS

```css
/* Mode clar */
:root {
  --bg: #FFFFFF;
  --bg-secondary: #F5F5F5;
  --surface: #FFFFFF;

  --text: #212121;
  --text-secondary: #616161;

  --primary: #2563EB;
  --primary-text: #FFFFFF;

  --border: #D1D5DB;
}

/* Mode fosc */
[data-theme="dark"] {
  --bg: #121212;
  --bg-secondary: #1E1E1E;
  --surface: #242424;

  --text: #F5F5F5;
  --text-secondary: #B3B3B3;

  --primary: #3B82F6;
  --primary-text: #FFFFFF;

  --border: #4B5563;
}
```

És una bona idea. Així el fetch() només es farà la primera vegada i, a partir de llavors, les dades es llegiran del localStorage.

L'algorisme seria:

Mirar si existeix colors al localStorage.
Si existeix, carregar-lo des del localStorage.
Si no existeix, fer el fetch().
Guardar el JSON al localStorage.
Aplicar el tema.

Per exemple:

```js
let colors;

async function carregarColors() {

    // Intentem llegir del localStorage
    const dades = localStorage.getItem("colors");

    if (dades) {

        console.log("Colors carregats del localStorage");

        colors = JSON.parse(dades);

    } else {

        console.log("Colors carregats del fitxer JSON");

        const resposta = await fetch("./json/colors.json");

        colors = await resposta.json();

        // Guardem el JSON al localStorage
        localStorage.setItem(
            "colors",
            JSON.stringify(colors)
        );

    }

    aplicarTema("clar");
}
```

La resta del teu codi pot quedar exactament igual.
Per què fem servir JSON.stringify()?
El localStorage només pot guardar cadenes de text.
Per tant:

```js
localStorage.setItem("colors", colors);
```

no funciona correctament.

Cal convertir l'objecte a text:

```js
localStorage.setItem(
    "colors",
    JSON.stringify(colors)
);
```

Quan el recuperes:

```js
const dades = localStorage.getItem("colors");
```

obtens un text:

```js
"{\"clar\":{\"fons\":\"#FFFFFF\"...}}"
```

Per tornar a tenir l'objecte JavaScript:

```js
colors = JSON.parse(dades);
```

Si modifiques el fitxer colors.json

Hi ha un inconvenient: si més endavant canvies colors.json, els usuaris continuaran utilitzant la versió desada al localStorage.

Una solució habitual és afegir una versió:

```js
const VERSIO = "1.0";
async function carregarColors() {

    const versioGuardada = localStorage.getItem("colorsVersio");

    if (versioGuardada === VERSIO) {

        colors = JSON.parse(
            localStorage.getItem("colors")
        );

    } else {

        const resposta = await fetch("./json/colors.json");

        colors = await resposta.json();

        localStorage.setItem(
            "colors",
            JSON.stringify(colors)
        );

        localStorage.setItem(
            "colorsVersio",
            VERSIO
        );
    }

    aplicarTema("clar");
}
```

Quan actualitzis colors.json, només hauràs de canviar:

```js
const VERSIO = "1.1";
```

i tots els navegadors descarregaran automàticament la nova versió del fitxer i la substituiran al localStorage.

Aquesta estratègia és molt utilitzada per gestionar dades de configuració que canvien poc però que vols poder actualitzar de manera controlada.

Today 7:49 PM
vull actualitzar la paleta, però no de manera recursiva

Si no vols fer-ho de manera recursiva, pots recórrer només el primer i el segon nivell de l'objecte. Això és suficient per a una estructura com la teva, on hi ha propietats simples (fons, vora, etc.) i grups (text, boto, primari, ...).

Per exemple:

```js
function aplicarTema(tema) {

    const dades = colors[tema];

    for (const [clau, valor] of Object.entries(dades)) {

        if (typeof valor === "object") {

            for (const [subClau, subValor] of Object.entries(valor)) {

                document.documentElement.style.setProperty(
                    `--${clau}-${subClau}`,
                    subValor
                );

            }

        } else {

            document.documentElement.style.setProperty(
                `--${clau}`,
                valor
            );

        }

    }

}
```

Si tens aquest JSON:

```js
{
  "clar": {
    "fons": "#FFFFFF",
    "superficie": "#F8F9FA",
    "text": {
      "principal": "#111827",
      "secundari": "#4B5563"
    },
    "boto": {
      "primari": "#2563EB"
    }
  }
}
```

es generaran aquestes variables CSS:

```js
--fons
--superficie
--text-principal
--text-secundari
--boto-primari
```

Quan és suficient aquest mètode?

És adequat si el teu JSON no té més de dos nivells de profunditat. En el teu cas, però, hi ha una excepció:

"primari": {
    "50": "#EFF6FF",
    "100": "#DBEAFE",
    ...
}

Aquest grup també es processarà correctament i generarà:

--primari-50
--primari-100
--primari-200
...

Per tant, per a l'estructura actual del teu colors.json, aquest mètode és suficient i més senzill que una funció recursiva.

Si en el futur afegissis un quart nivell, per exemple:

"text": {
    "titols": {
        "h1": "#111111"
    }
}

llavors sí que caldria una funció recursiva o adaptar el recorregut. Amb la paleta que has definit fins ara, no és necessari.

Fes la funció de manera recursiva i explica-me-la

Una funció recursiva és ideal perquè no depèn de la profunditat del JSON. Si demà hi afegeixes nous nivells, continuarà funcionant sense modificar el codi.

Funció recursiva

```js
function aplicarVariables(objecte, prefix = "") {

    for (const [clau, valor] of Object.entries(objecte)) {

        // Si és un altre objecte, continuem baixant un nivell
        if (typeof valor === "object" && valor !== null) {

            const nouPrefix = prefix
                ? `${prefix}-${clau}`
                : clau;

            aplicarVariables(valor, nouPrefix);

        } else {

            // Si és un valor (string, número, etc.), creem la variable CSS
            document.documentElement.style.setProperty(
                `--${prefix}-${clau}`,
                valor
            );

        }
    }
}
```

Per aplicar el tema:

```js
function aplicarTema(tema) {
    aplicarVariables(colors[tema]);
}
```

Com funciona?

Suposem que tens aquest JSON:

```js
{
  "clar": {
    "fons": "#FFFFFF",
    "text": {
      "principal": "#111827",
      "secundari": "#4B5563"
    },
    "boto": {
      "primari": "#2563EB",
      "hover": "#1D4ED8"
    }
  }
}
```

Quan crides:

aplicarVariables(colors.clar);

el primer valor de objecte és:

{
    fons: "#FFFFFF",
    text: {...},
    boto: {...}
}

i prefix és:

""
Primera iteració

El bucle recorre:

clau = "fons"
valor = "#FFFFFF"

Com que no és un objecte, executa:

document.documentElement.style.setProperty(
    "--fons",
    "#FFFFFF"
);

Ja tens creada la variable CSS:

--fons: #FFFFFF;
Segona iteració

Ara:

clau = "text"

valor = {
    principal:"#111827",
    secundari:"#4B5563"
}

Com que és un objecte, entra a l'if:

const nouPrefix = "text";

aplicarVariables(valor, "text");

Observa que la funció es crida a si mateixa.

Això és precisament la recursivitat.

Ara tenim una segona execució de la funció.

Segona execució

Ara:

objecte = {
    principal:"#111827",
    secundari:"#4B5563"
}

prefix = "text"

El bucle torna a començar.

Primer element:

clau = "principal"

valor = "#111827"

No és un objecte.

Per tant:

document.documentElement.style.setProperty(
    "--text-principal",
    "#111827"
);

Després:

clau = "secundari"

Es crea:

--text-secundari

Quan ja no queden més propietats, aquesta segona execució acaba.

La funció torna al nivell anterior.

Tercera iteració del primer nivell

Ara continua on s'havia quedat:

clau = "boto"

Com que és un objecte:

aplicarVariables(valor, "boto");

I torna a entrar dins de la mateixa funció.

Ara crearà:

--boto-primari
--boto-hover
Esquema visual
aplicarVariables(colors.clar,"")
│
├── fons
│      └── --fons
│
├── text
│      │
│      ├── principal
│      │      └── --text-principal
│      │
│      └── secundari
│             └── --text-secundari
│
└── boto
       │
       ├── primari
       │      └── --boto-primari
       │
       └── hover
              └── --boto-hover
I si hi ha més nivells?

Suposa ara:

{
    "text": {
        "titols": {
            "h1": "#111111",
            "h2": "#333333"
        }
    }
}

La funció farà:

text
   ↓
titols
   ↓
h1

i generarà:

--text-titols-h1
--text-titols-h2

Sense canviar ni una sola línia del codi.

Per què funciona?

Cada vegada que troba un objecte:

if (typeof valor === "object")

no intenta convertir-lo en una variable CSS. En lloc d'això, baixa un nivell dins de l'objecte i es torna a cridar a si mateixa amb un prefix més llarg.

Quan finalment troba un valor simple (una cadena, un número, etc.), és quan crea la variable CSS.

Això fa que la funció sigui independent de la profunditat del JSON: recorrerà tots els nivells fins que ja no quedin objectes per explorar. És un patró molt utilitzat per transformar estructures jeràrquiques (arbres) en una llista plana de claus, com ara les variables CSS.