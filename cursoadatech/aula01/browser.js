const readlineSync = require("readline-sync");

const idade = readlineSync.question("Qual eh a sua idade");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// Coreção explicito (Conversão manual)
console.log(Number("X"));

console.log(String(10), typeof String(10));

console.log(Boolean(2));

// Coreções implicito

console.log(1 + "1");
console.log(10 + "5")
console.log(10 - "5");
