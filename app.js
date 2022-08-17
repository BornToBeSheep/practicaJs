let decimal = parseInt(prompt("ingrese el numero a analizar"));

if (decimal>= 0 && decimal<= 255){
    let dec8 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec7 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec6 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec5 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec4 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec3 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec2 = decimal % 2;
    decimal = parseInt(decimal/2);
    let dec1 = decimal % 2;

    alert(dec1);
    alert(dec2);
    alert(dec3);
    alert(dec4);
    alert(dec5);
    alert(dec6);
    alert(dec7);
    alert(dec8);
}else {
    alert ("El numero ingresado no se puede expresar con 8 bits")
}