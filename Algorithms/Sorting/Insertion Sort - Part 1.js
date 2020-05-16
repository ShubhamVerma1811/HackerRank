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

function insertionSort1(n, arr) {
  // let temp, j;
  // for (let i = 1; i < a.length; i++) {
  //     temp = a[i];
  //     for (j = i - 1; j >= 0 && a[j] > temp; j--) {
  //         console.log(a)
  //         a[j + 1] = a[j]
  //     }
  //     a[j + 1] = temp
  // }
  let i = arr.length - 1;
  let val = arr[i];

  while (val < arr[i - 1]) {
    arr[i] = arr[i - 1];
    console.log(arr.join(` `));
    i--;
  }
  arr[i] = val;
  console.log(arr.join(` `));
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  insertionSort1(n, arr);
}
