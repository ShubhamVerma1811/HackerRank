"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  let count = {};
  for (let value of arr) {
    if (value < 0) {
      count["neg"] = (count["neg"] || 0) + 1;
    } else if (value > 0) {
      count["pos"] = (count["pos"] || 0) + 1;
    } else {
      count["zero"] = (count["zero"] || 0) + 1;
    }
  }
  console.log(
    `${count["pos"] / arr.length || 0} \n ${
      count["neg"] / arr.length || 0
    } \n ${count["zero"] / arr.length || 0}`
  );
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
