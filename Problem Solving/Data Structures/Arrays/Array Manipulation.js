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

function arrayManipulation(n, queries) {
  //     let arr = Array(n).fill(0);
  //     let a = 0;
  //     let b = 0;
  //     let k = 0;
  //     for (let i = 0; i < queries.length; i++) {
  //         for (let j = (queries[i][0] - 1); j < (queries[i][1] - 1); j++) {
  //             arr[j] += queries[i][2]
  //         }
  //     }
  //     return (Math.max(...arr))
  // }

  var arr = [];
  var max = 0;
  // init each element of arr to 0
  for (let l = 0; l < n; l++) {
    arr[l] = 0;
  }
  // for each sum operation in queries
  for (let i = 0; i < queries.length; i++) {
    // update arr with number to add at index=queries[i][0]  and number to remove at index=queries[i][0]+1 =>
    // this will allow us to build each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
  }
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
  }
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }
  //max = Math.max(...arr); // not working for big arrays
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nm = readLine().split(" ");

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine()
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  let result = arrayManipulation(n, queries);

  ws.write(result + "\n");

  ws.end();
}
