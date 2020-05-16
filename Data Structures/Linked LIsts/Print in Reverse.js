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

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep) {
  while (node != null) {
    process.stdout.write(String(node.data));

    node = node.next;

    if (node != null) {
      process.stdout.write(sep);
    }
  }
}

function reversePrint(head) {
  // REVERSE THE LIST THEN PRINT
  // let node = head,
  //     prev = null,
  //     next;

  // while (node) {
  //     // save next before we overwrite node.next!
  //     next = node.next;

  //     // reverse pointer
  //     node.next = prev;

  //     // step forward in the list
  //     prev = node;
  //     node = next;
  // }
  // while (prev) {
  //     console.log(prev.data)
  //     prev = prev.next;
  // }

  // PRINT THE LIST IN REVERSE (NOT REVERSE THE LIST THEN PRINT)
  let arr = [];
  while (head) {
    arr.push(head.data);
    head = head.next;
  }

  arr = arr.reverse();
  arr.map((i) => console.log(i));
}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    reversePrint(llist.head);
  }
}
