let oculto = true
let resolucion= window.screen.width;
console.log(resolucion);
function muestra(){
	if(oculto){
		document.getElementById("menu").style = "display: block";
		oculto = false;
	}
	
}
function oculta(){
	if(!oculto){
		document.getElementById("menu").style = "display: none";
		oculto = true;
	}

}


