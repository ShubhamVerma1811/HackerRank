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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apple, orange) {
  //     let apple = [];
  //     let orange = [];
  //     let countA = 0;
  //     let countB = 0;
  //     let final = []

  //     for (let i of apples) {
  //         apple.push(a + i)
  //     }
  //     for (let i of oranges) {
  //         orange.push(b + i)
  //     }

  //     for (let i of apple) {
  //         if (s <= i && i <= t) {
  //             countA += 1
  //             final[0] = countA
  //         }
  //     }

  //     for (let i of orange) {
  //         if (s <= i && i <= t) {
  //             countB += 1
  //             final[1] = countB

  //         }
  //     }

  //     console.log(final[0])
  //     console.log(final[1])
  // }
  let apple_count = apple.filter((value) => value + a >= s && value + a <= t)
    .length;
  let orange_count = orange.filter((value) => value + b >= s && value + b <= t)
    .length;
  console.log(apple_count);
  console.log(orange_count);
}

function main() {
  const st = readLine().split(" ");

  const s = parseInt(st[0], 10);

  const t = parseInt(st[1], 10);

  const ab = readLine().split(" ");

  const a = parseInt(ab[0], 10);

  const b = parseInt(ab[1], 10);

  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const apples = readLine()
    .split(" ")
    .map((applesTemp) => parseInt(applesTemp, 10));

  const oranges = readLine()
    .split(" ")
    .map((orangesTemp) => parseInt(orangesTemp, 10));

  countApplesAndOranges(s, t, a, b, apples, oranges);
}
