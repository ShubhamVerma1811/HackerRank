"use strict";

const fs = require("fs");

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

// Complete the camelcase function below.
function camelcase(s) {
  let x = "";
  let t = 0;
  let count = 0;
  for (let letter in s) {
    if (s[letter] === s[letter].toUpperCase()) {
      x = s.slice(t, s.indexOf(s[letter]));
      t = s.indexOf(s[letter]);
      count += 1;
    }
  }
  return count + 1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = camelcase(s);

  ws.write(result + "\n");

  ws.end();
}
