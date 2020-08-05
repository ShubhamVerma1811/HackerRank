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

function strangeCounter(t) {
  // let intValue = 3;
  // value = intValue;
  // for (let i = 1; i <= t; i++) {
  //     value--;
  //     if (value === 1) {
  //         value = value
  //     }
  // }

  let rem = 3;
  while (t > rem) {
    t = t - rem;
    rem *= 2;
  }
  return rem - t + 1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  let result = strangeCounter(t);

  ws.write(result + "\n");

  ws.end();
}
