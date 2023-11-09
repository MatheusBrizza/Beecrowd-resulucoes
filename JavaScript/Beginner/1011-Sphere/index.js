var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var r = Number(lines[0]);

function calcularVolumeEsfera(r) {
  var pi = 3.14159;
  var resultado = (4 / 3) * pi * Math.pow(r, 3);
  console.log(`VOLUME = ${resultado.toFixed(3)}`);
}

calcularVolumeEsfera(r);
