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
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function timeConversion(time) {
  let timeArr = time.split(":");
  if (timeArr[0] === "12" && timeArr[2].slice(2) === "PM") {
    timeArr[2] = timeArr[2].slice(0, 2);
    return timeArr.join(":");
  }

  if (timeArr[0] === "12" && timeArr[2].slice(2) === "AM") {
    timeArr[2] = timeArr[2].slice(0, 2);
    timeArr[0] = "00";
    return timeArr.join(":");
  }

  if (timeArr[2].slice(2) === "PM") {
    timeArr[2] = timeArr[2].slice(0, 2);
    timeArr[0] = Number(timeArr[0]) + 12;
    return timeArr.join(":");
  }
  if (timeArr[2].slice(2) === "AM") {
    timeArr[2] = timeArr[2].slice(0, 2);
    return timeArr.join(":");
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
