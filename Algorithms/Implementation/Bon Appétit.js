"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  return (bill.reduce((a, b) => a + b) - bill[k]) / 2 === b
    ? "Bon Appetit"
    : b - (bill.reduce((a, b) => a + b) - bill[k]) / 2;
}

function main() {
  const nk = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  console.log(bonAppetit(bill, k, b));
}
