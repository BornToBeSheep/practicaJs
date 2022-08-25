let decimal = parseInt(prompt("ingrese el numero a analizar"));
let bits = parseInt(prompt("Ingrese la cantidad de bits"));

if (decimal>= 0 && decimal <= Math.pow(2, bits - 1)){
    let digito;
    for (i = 0; i <= bits - 1; i++){
        digito = parseInt(decimal % 2); 
        decimal = decimal / 2;
        alert (digito);
    }
}else {
    alert (`El numero ingresado no se puede expresar con ${bits} bits`)
}