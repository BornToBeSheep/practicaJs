
function minimo(alumnos, cantAlumnos){
    let min = 999;
    let alumMin;
    console.log(alumnos[1].alumno);
    for (let i= 1; i<= cantAlumnos; i++){
        if (min < alumnos[i].nota){
            min =  alumnos[i].nota;
            alumMin = alumnos[i].alumno;
        }
    }
    return alumMin;
}


function promedio (alumnos, cantAlumnos){
    let notaTotal= 0;
    for (let i= 1; i<= cantAlumnos; i++){
        notaTotal = alumnos[i].nota + notaTotal;
    }
    return notaTotal / cantAlumnos;
}

var cantAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos del curso"));
var alumnos = [];
for (let i = 1; i <= cantAlumnos; i++){
    let alumno = prompt("Ingrese el nombre del alumno");
    let nota = parseInt(prompt("Ingrese la nota del alumno"))
    alumnos.push({alumno, nota});
}
for (let index = 0; index <= alumnos.length; index++){
    minimo(alumnos[index])
    console.log(alumnos[index].alumno);
    console.log(alumnos[index].nota);
}
console.log(minimo(alumnos, cantAlumnos));

console.log(promedio(alumnos, cantAlumnos))