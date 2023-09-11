
alert('QUIZ PERUANO')

let nombre
let apellido
let saludo
let bienvenidos


contador = 0

bienvenidos = prompt ('¡bienvenido a quizz peruano! ¿estas listo para comenzar?' + '\n' 
+ 'si' + '\n'
+ 'no' + '\n')

nombre = prompt ('indique su nombre')
apellido = prompt ('indique su apellido')

function saludar (nombre, apellido){
    alert ('hola ' + nombre + ' ' + apellido)
}
saludar (nombre,apellido)
if (bienvenidos == 'si'){

    alert('Para seleccionar la respuesta, ingrese el numero de la respuesta.')

do {
let pregunta1 = prompt('¿Cual es la capital de Perú? \n 1 - LIMA \n 2 - ARERQUIPA')

if (pregunta1 == 1){
	alert('CORRECTO')
	contador++
}else {
	alert ('RESPUESTA INCORRECTA')
}

let pregunta2 = prompt ('¿Cual es el rio mas largo del mundo? \n 1 - AMAZONAS \n 2 - NILO')

if (pregunta2 == 1){
	alert('CORRECTO')
	contador++

}else {
	alert ('RESPUESTA INCORRECTA')
}

let pregunta3 = prompt ('¿Cual es la moneda del Perú? \n 1 - SOL \n 2 - PESO PERUANO')

if (pregunta3 == 1){
	alert('CORRECTO')
	contador++
}else {
	alert ('RESPUESTA INCORRECTA')
}

alert('La cantidad de respuestas correctas es de ' +contador)


do {

    let continuar = prompt('¿Quieres volver a intentarlo? si/no' + '\n' 
	+ 'si' + '\n'
	+ 'no' + '\n');

	if (continuar === 'si') {
	  } else if (continuar === 'no') {
		alert('Hasta luego');
	  } else {
		alert('Respuesta no válida. Por favor, responde con "si" o "no".');
	  }
	
} 
while (continuar == 'si');
}
while (continuar === 'si');
}






