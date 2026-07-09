const exercicis = [
  {
    titol: "Validació de correus electrònics",
    enunciat:
      "Escriu una funció <b>esEmailValid(email)</b> que retorni true si l'email és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista: "Ha de contenir <b>@</b>, i després un <b>.</b>",
    proves: "test@example.com // true<br>test.example.com // false",
  },
  {
    titol: "Extracció de números de telèfon",
    enunciat:
      "Escriu una funció <b>extreureNombresTelefon(text)</b> que retorni una llista de números de telèfon trobats en el text.",
    tipusResposta: "llista",
    pista:
      "Ha de contenir <b>3 números entre parèntesis</b>, després <b>3 números</b>, un <b>-</b> i <b>4 números</b> més",
    proves:
      "Call me at (123) 456-7890 or (987) 654-3210, // ['(123) 456-7890', '(987) 654-3210']",
  },
  {
    titol: "Validació de codis postals",
    enunciat:
      "Escriu una funció <b>esCpValid(zip)</b> que retorni true si el codi postal és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista: "Ha de contenir 5 números",
    proves: "12345 // true<br>12345-6789 // true<br>123456 // false",
  },
  {
    titol: "Extracció de dominis de correu electrònic",
    enunciat:
      "Escriu una funció <b>extraureDominiEmail(email)</b> que retorni el domini de l'email.",
    tipusResposta: "cadena",
    pista: "S'ha de treure tot el què hi hagi després de la <b>@</b>",
    proves: "test@example.com; // example.com",
  },
  {
    titol: "Validació de números de targeta de crèdit",
    enunciat:
      "Escriu una funció <b>esTargetaCreditValida(number)</b> que retorni true si el número de targeta és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista:
      "Ha de contenir <b>16 números</b>, <b>tots junts</b>, o <b>separats per espais en grups de 4</b>",
    proves:
      "1234 5678 9012 3456 // true<br>1234567890123456 // true<br>1234-5678-9012-3456 // false",
  },
  {
    titol: "Extracció de hashtags",
    enunciat:
      "Escriu una funció <b>extraureHashtags(text)</b> que retorni una llista de hashtags trobats en el text.",
    tipusResposta: "llista",
    pista: "Extraure el <b>#</b> i la <b>paraula adjunta</b>",
    proves:
      "Loving the new #JavaScript features in #ECMAScript2021! // [#JavaScript, #ECMAScript2021]",
  },
  {
    titol: "Validació de contrasenyes",
    enunciat:
      "Escriu una funció <b>esPasswordValida(password)</b> que retorni true si la contrasenya és vàlida i false altrament.",
    tipusResposta: "boolea",
    pista:
      "Ha de contenir <b>lletres</b>, <b>números</b>, i <b>caràcters especials</b>",
    proves:
      "Password1! // true<br>password1 // false<br>Password // false<br>Password! // false<br>Password1 // false",
  },
  {
    titol: "Extracció de dates",
    enunciat:
      "Escriu una funció <b>extraureDates(text)</b> que retorni una llista de dates trobades en el text.",
    tipusResposta: "llista",
    pista: "",
    proves:
      "My birthday is on 12/05/1992 and my brother's is on 03/10/1995. // [12/05/1992, 03/10/1995]",
  },
  {
    titol: "Eliminació de duplicats en una cadena",
    enunciat:
      "Escriu una funció <b>treureParaulesDuplicades(text)</b> que retorni la cadena sense paraules duplicades,consecutives.",
    tipusResposta: "cadena",
    pista: "Retorn text.replaceregex('$1')",
    proves: "This is is a test test. // This is a test.",
  },
  {
    titol: "Validació de URL",
    enunciat:
      "Escriu una funció <b>esURLValida(url)</b> que retorni true si la URL és vàlida i false altrament.",
    tipusResposta: "boolea",
    pista: "return regex.test(url)",
    proves:
      "https://www.example.com // true<br>ftp://files.example.com // true<br>htp://invalid-url.com // false",
  },
  {
    titol: "Validació de números de seguretat social",
    enunciat:
      "Escriu una funció <b>esSegSocValida(ssn)</b> que retorni true si el número de seguretat social és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista: "9 números separats en tres grups de 3 per guions",
    proves: "123-45-6789 // true<br>123-456-789 // false",
  },
  {
    titol: "Extracció de noms d'usuari de Twitter",
    enunciat:
      "Escriu una funció <b>extraureUsuarisTwitter(text)</b> que retorni una llista de noms d'usuari de Twitter trobats en el text.",
    tipusResposta: "llista",
    pista: "<b>@</b> seguida de nom d'usuari",
    proves:
      "Follow us on Twitter @example and @test_account. // [@example, @test_account]",
  },
  {
    titol: "Validació de codis de barres EAN-13",
    enunciat:
      "Escriu una funció <b>esEAN13Valid(code)</b> que retorni true si el codi de barres EAN-13 és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista: "",
    proves: "4006381333931 // true<br>123456789012 // false",
  },
  {
    titol: "Extracció de URLs",
    enunciat:
      "Escriu una funció <b>extractURLs(text)</b> que retorni una llista de URLs trobades en el text.",
    tipusResposta: "llista",
    pista: "",
    proves:
      "Visit our site at https://www.example.com or http://www.test.com // [https://www.example.com, http://www.test.com]",
  },
  {
    titol: "Validació de noms de fitxers",
    enunciat:
      "Escriu una funció <b>esFitxerValid(fileName)</b> que retorni true si el nom de fitxer és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista: "",
    proves: "example.txt // true<br>example.docx // false",
  },
  {
    titol: "Extracció de codis HEX de colors",
    enunciat:
      "Escriu una funció <b>extraureColorsHex(text)</b> que retorni una llista de codis HEX de colors trobats en el text.",
    tipusResposta: "llista",
    pista: "",
    proves: "Colors: #FF5733, #FFF, and #123456. // [#FF5733, #FFF, #123456]",
  },
  {
    titol: "Validació de números ISBN-10",
    enunciat:
      "Escriu una funció <b>esISBN10Valid(isbn)</b> que retorni true si el número ISBN-10 és vàlid i false altrament.",
    tipusResposta: "boolea",
    pista: "",
    proves: "0306406152 // true<br>123456789X // true<br>1234567890 // false",
  },
  {
    titol: "Extracció de paraules amb lletra majúscula",
    enunciat:
      "Escriu una funció <b>extraureParaulesMajuscula(text)</b> que retorni una llista de paraules amb lletra majúscula trobades en el text.",
    tipusResposta: "llista",
    pista: "",
    proves: "Hello World, this is JavaScript! // [Hello, World, JavaScript]",
  },
  {
    titol: "Validació de plaquetes de matrícula",
    enunciat:
      "Escriu una funció <b>esMatriculaValida(plate)</b> que retorni true si la plaqueta de matrícula és vàlida i false altrament.",
    tipusResposta: "boolea",
    pista: "",
    proves: "ABC-123 // true<br>AB-1234 // false",
  },
  {
    titol: "Extracció de preus",
    enunciat:
      "Escriu una funció <b>extraurePreus(text)</b> que retorni una llista de preus trobats en el text.",
    tipusResposta: "llista",
    pista: "",
    proves:
      "The total cost is $15.99, but with discount it's only $12.00. // [$15.99, $12.00]",
  },
];
