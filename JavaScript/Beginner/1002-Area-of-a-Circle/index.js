var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let r = Number(lines[0]);
function calcularAreaCirculo(r) {
  var a = 3.14159 * Math.pow(r, 2);

  console.log(`A=${a.toFixed(4)}`);
}

calcularAreaCirculo(r);
