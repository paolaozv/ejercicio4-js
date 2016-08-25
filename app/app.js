var duracionDeLlamada = prompt("Ingresa duración de la llamada");
    duracionDeLlamada = parseFloat(duracionDeLlamada);
var costoPorMinuto= prompt("Ingresa costo por minuto");
    costoPorMinuto = parseFloat(costoPorMinuto);
var costoDeLlamada = duracionDeLlamada*costoPorMinuto;
   
   document.write("Su costo total de su llamada es:");
   document.write(costoDeLlamada);