const ejercicio1 = document.getElementById("ejercicio1");
const ejercicio2 = document.getElementById("ejercicio2");
const res = document.getElementById("resultado");

ejercicio1.onclick = function () {
  // Ejercicio 1
  let importe = prompt("Importe de compra:");
  let descuento = 0;
  if (importe >= 150) {
    descuento = importe * 0.12;
    importe = importe - descuento;
  } else {
    descuento = 0;
  }
  res.innerHTML = `El descuento es de ${descuento} y el importe final es de ${importe}`;
};

ejercicio2.onclick = function () {
  // Ejercicio 2
  let nombre = prompt("Nombre del alumno:");
  let parcial = prompt("Nota del examen parcial:");
  let final = prompt("Nota del examen final:");
  let practicas = prompt("Nota del promedio de prácticas:");

  let promedio = parcial * 0.25 + final * 0.5 + practicas * 0.25;
  if (promedio >= 13) {
    res.innerHTML = `El alumno ${nombre} está aprobado con un promedio de ${promedio}`;
  }
};
