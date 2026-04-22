# Marques per donar format 

Les **marques de format** permeten estructurar com en un processador de text i ajuden els cercadors a indexar el contingut

- Etiquetes de bloc: No necessiten estar dins d'altres etiquetes, creen el seu propi bloc

    - Encapçalaments
    
    ```html
    <h1>Encapçalat de nivell 1</h1>
	<h2>Encapçalat de nivell 2</h2>
	<h3>Encapçalat de nivell 3</h3>
	<h4>Encapçalat de nivell 4</h4>
	<h5>Encapçalat de nivell 5</h5>
	<h6>Encapçalat de nivell 6</h6>
    ```
    
    - Paràgrafs
    
    ```html
    <p>Paràgraf</p>
    ```

    - Altres
    
    ```html
    <pre>Text preformatejat, permet espais</pre>
    <address>Informació de l'autor</address>
    ```
- Etiquetes en línia: Necesitan estar dins d'altres etiquetes, no creen el seu propi bloc

|etiqueta|descripció|
|-|-|
|br|Salt de línia <br/> També funciona sense /|
|b|<b>Text en negreta</b>|
|strong|<strong>Text important</strong>|
|i|<i>Text en </i>|
|em|<em>Text emfatitzat</em>|
|dfn|<dfn>Definició| Acció i efecte de definir.</dfn> |
|cite|<cite>Yo no soy mala, es que me han dibuixat así</cite>|
|code|<code>Text de codi de programa</code>|
|kbd|<kbd>Entrada de teclat</kbd>|
|samp|<samp>Text de consola</samp>|
|abbr|	Posen el cursor sobre <abbr title = "exemple">ej.</abbr> per |veure què significa l'abreviatura
|q|<q>Text entrecomillat</q>|
|bdo|<bdo dir="ltr">Text al dret</bdo><bdo dir="rtl">Text al revés</|bdo>
|del|<del>Text eliminat, el mal</del>|
|ins|<ins>Text eliminat, el bo</ins>|
|sub|<sub>Subíndex</sub>|
|sup|<sup>Superíndice</sup>|
|mark|<mark>Text reetiquetat</mark>|
|span	Aplicar un format a un <span style="background-color: yellow;" |title="Text ressaltat">text</span> dins d'un paràgraf

Les etiquetes es poden combinar, però respectant l' ordre d' anidament

Forma correcta:

```html
<b>Text en negreta i <i>text en negreta i itàlica</i></b>
```

Forma incorrecta:

```html
<b> Text en negreta i <i>text en negreta i itàlica</b></i>
```
 
- Etiquetes de contenidors de textPueden contenir dins altres etiquetes de bloc

```html
<div>Contenidor</div>
```

- Línies horitzontals
Permeten separar blocs
hr: 		<hr/> També funciona sense /

- Fonts, mida, alineació i colors Tot i que l'estàndard és treballar amb estils, veurem l'antiga etiqueta font Permet triar font, mida i color
<p><font face="Arial">Text a Arial</font></p><p><font face="Comic Sans MS,Arial,Verdana">Text a Comic Sans</font></p>

<p><font size="5">Text de mida 5</font></p>

<p><font color="xarxa">Text vermell</font></p><p><font color="green">Text verd</font></p><p><font color="blue">Text blau</font></p>
	
<p align="right">Text a la dreta</p>
	<p align="center">Text centrat</p>
	<p align="left">Text a l'esquerra</p>
Alguns colors s' anomenen pel seu nom, els altres pel seu codi hexadecimal o el seu codi decimal RGB, consulta la llista completa: 	http://www.coloreshtml.com/
 
També podem aplicar colors a altres elements com el fons de la pàgina
Dins d' una pàgina bàsica substitueix <body> per aquest fragment de codi i observa el resultat en un navegador:
<body style="background-color: silver">

- Llistes
Llista no ordenada

<ul>	
	<li>Element</li>
	<li>Element</li>
	<li>Element</li>
</ul>
	Llista ordenada

<ol>
	<li>Element 1</li>
	<li>Elemento 2</li>
	<li>Elemento 3</li>
</ol>
Llista de definició
<dl>
    <dt>Tèrmino 1</dt>
        <dd>Definició 1</dd>
    <dt>Tèrmino 2</dt>
        <dd>Definició 2</dd>
    <dt>Tèrmino 3</dt>
</dl>

- ComentarisSon notes per documentar el codi, però el navegador no mostra
<!-- documentar el codi -->



 
3.	Enllaços

Els enllaços a altres documents i recursos es marquen amb l'etiqueta a i l'adreça de l'enllaç es marca amb l'atribut href

•	Enllaços externs
Sempre són absoluts
	<a href="http://www.google.es/">Enllaç a Google</a>
	<a href="ftp://ftp.servidor.com">Servidor FTP</a>

•	Enllaços interns
Poden ser relatius o absoluts

<a href="c.html">Enllaç a C</a>
<a href =".. /a.html">Enllaç a A</a>

<a href="http://www.dominio.com/a.html">Enllaç a A</a>
<a href="http://www.dominio.com/xxx/c.html">Enllaç a C</a>
 
•	Enllaços d'ancoraDebem usar una marca concreta dins del codi

<a href="#parrafo1">Ir al paràgraf 1</a>
<a href="#parrafo2">Ir al paràgraf 2</a>
     	...
<h3 id="parrafo1">Pàgraf 1</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicin ... </p>
     	...
<h3 id="parrafo2">Pàgraf 2</h3>
<p>Sed ut perspiciatis unde omnis iste natus error ... </p>


Podem combinar els enllaços interns o externs amb els d'àncora
<a href="http://es.wikipedia.org/wiki/Hiperenlace#Comportamiento_de_los_enlaces_en_los_navegadores_web">Enlace</a>


•	Enllaços a documents
Relatius
<a href="apuntes.pdf">Apunts</a>
O absoluts
		     <a href="http://www.dominio.com/apuntes.pdf">Apunts</a>
•	Enllaços de correu
    <a href="mailto:cristian@fundaciocim.org">Correo de Cristian</a>
 
Podem especificar en quina finestra s'obre l'enllaç, amb l'atribut:
•	_blank: s'obre en una finestra nova
•	_self: s'obre a la pròpia finestra (per defecte)
