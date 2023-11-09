var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let r = Number(lines[0]);
function calcularAreaCirculo(r) {
  var resultado = 3.14159 * Math.pow(r, 2);

  console.log(`A=${resultado.toFixed(4)}`);
}

calcularAreaCirculo(r);
