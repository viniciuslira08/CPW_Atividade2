function acessarIMC(){
	location.href="MultiCalculadora.html";
}
function acessarReta(){
	location.href="Retangulo.html";
}
function acessarCirc(){
	location.href="Circulo.html";
}
function calcularIMC(){
	var peso = document.getElementById('peso').value;
	var alturaP = document.getElementById('alturaP').value;
	var res = parseInt(peso) * parseInt(alturaP);
	alert("O resultado é:" + res);
}

function calcularReta(){
	var base = document.getElementById('base').value;
	var alturaB = document.getElementById('alturaB').value;
	var res = parseInt(base) * parseInt(alturaB);
	alert("O resultado é:" + res);
}

function calcularCirc(){
	var raio = document.getElementById('raio').value;
	var res = raio*raio*3.14;
	alert("O resultado é:" + res);
}