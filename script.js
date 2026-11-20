function promedio() {
  let promedio1 = Number(document.getElementById("Promedio1").value);
  let promedio2 = Number(document.getElementById("Promedio2").value);
  let promedio3 = Number(document.getElementById("Promedio3").value);
  let promedio4 = Number(document.getElementById("Promedio4").value);
  let promedio5 = Number(document.getElementById("Promedio5").value);

  let suma = promedio1 + promedio2 + promedio3 + promedio4 + promedio5;
  let resultado = suma / 5;

  document.getElementById("total").innerHTML =
    "El resultado del promedio es: " + resultado;
}