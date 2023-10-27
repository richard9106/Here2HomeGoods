const formInfo={
	name1:'',
	email:'',
	phone:'',
	message:''
}
const name=document.querySelector("#name1");
const email=document.querySelector("#email");
const phone=document.querySelector("#phone");
const message=document.querySelector("#message");
const form=document.querySelector("#formInfo");
const msm=document.querySelector("#pl");


email.addEventListener('input', leerTexto);
phone.addEventListener('input', leerTexto);
message.addEventListener('input', leerTexto);
name1.addEventListener('input',leerTexto);

form.addEventListener("submit", function(evento){
    console.log(evento);
//validar for

const{name, email, phone, message} =formInfo;
if(name === '' || email === '' || phone === '' || message === ''){
    evento.preventDefault();
	console.log('Al menos un campo esta vacio');
    console.log(name);
	mostrarError('All fields must be completed');
	return(false); // Detiene la ejecución de esta función
}
else{

console.log('submitted form')
form.reset();
mostrarMensaje('submitted form');
evento.preventDefault();

}
});

function mostrarError(mensajes) {
    const alerta = document.createElement('p');
    alerta.textContent = mensajes;
    alerta.classList.add('error');
    msm.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 2000);
    
}


function mostrarMensaje(mensajes) {
    const alerta = document.createElement('p');
    alerta.textContent = mensajes;
    alerta.classList.add('correcto');
    msm.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 4000);	
}



function leerTexto(e){
	// console.log(e.target.value);
	formInfo[e.target.id]=e.target.value;
	console.log(formInfo);
}


//VERIFICACION NOMBRE
function verificaNombre(){
    let patron = new RegExp("^[a-z A-Z áéíóúüñÁÉÍÓÚ]{2,20}$");
	let valor = document.getElementById("name1").value;
	let nm=document.getElementById("name1");
	let valido = patron.test(valor);

	if(!valido){
        console.log("No se verifico el nombre");
        nm.style.border="red solid 3px";
        return(false);
	}
   
    else{
		nm.style.border="none";
		return(true)
	}
}

//VERIFICACION CORREO
function verificaEm(){
    let patron = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
	let valor = document.getElementById("email").value;
	let ema=document.getElementById("email");
	let valido = patron.test(valor);

	if(!valido){
        console.log("No se verifico el Email");
		ema.style.border="red solid 3px";
        return(false);
		
	}
   else{
    ema.style.border="none";
		return(true)
	}
}

//VERIFICACION PHONE NUMBER
function verificaTel(){
    
    let patron = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
	let valor = phoneInput.getNumber();
    let phn=document.getElementById("phone");
	let valido = patron.test(valor);

	if(!valido){
        console.log(valor)//obtencion numero completo
        console.log("No se verifico el TELEFONO");
        phn.style.border="red solid 3px";

       
        return(false);
	}
   else{
    php.textContent
    console.log(valor)//obtencion numero completo 
    phn.style.border="none";
    document.getElementById("phone").value=valor;
    return(true)
    

   }
   
}

/*VERIFICAR MENSAJE*/ 
function verificaMesage(){

            let patron = new RegExp('^[\"\'\<\>][a-zA-Z0-9-]{1,400}$')
            let valor = document.getElementById("message").value;
            let msn=document.getElementById("message");
            let valido = patron.test(valor);
            if(valido){

                console.log("No se verifico el TELEFONO");
                msn.style.border="red solid 3px";
                return(false);
            }
            else{
                msn.style.border="none";
                return(true);
            }
        }