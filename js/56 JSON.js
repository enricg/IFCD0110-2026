let text = '{"empleats": ['+
'{"nom":"Joan", "cognom":"Dau"},'+
'{"nom":"Anna", "cognom":"Sentmenat"},'+
'{"nom":"Pere", "cognom":"Jaume"}]}';

console.log(text);
const obj = JSON.parse(text);
console.log(obj);

document.getElementById("demo").innerHTML="Nom: <b>"+obj.empleats[1].nom+"</b> Cognom: "+obj.empleats[1].cognom;