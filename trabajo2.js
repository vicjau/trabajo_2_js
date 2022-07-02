let nombre = prompt("Ingrese su nombre");
let monto = Number(prompt("Ingrese el monto que desea"));
let cuotas = prompt(`Ingrese las cuotas en las que sea devolver el dinero: 3 cuotas,
                                                                            6 cuotas,
                                                                            12 cuotas`);

for(let i=0; i<3; i++){
    if(cuotas=="3" || cuotas=="3 cuotas"){
        let cuota_3 = monto * 0.21
        console.log(nombre, "lo que va a tener que devolver en intereses es: ", cuota_3)
    }
    else if(cuotas=="6" || cuotas=="6 cuotas"){
        let cuota_6 = monto * 0.30
        console.log(nombre, "lo que va a tener que devolver en intereses es: ", cuota_6)
    }
    else if(cuotas=="12" || cuotas=="12 cuotas"){
        let cuota_12 = monto * 0.42
        console.log(nombre, "lo que va a tener que devolver en intereses es: ", cuota_12)
    }
    else{
        alert("Lo que ingreso no es correcto")
        break
    }
}