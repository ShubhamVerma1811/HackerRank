'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

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

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// function getNode(head, n) {
  // let mainPtr = head;
  // let refPtr = head;

  // let count = 0;

  // while(count < n){
  //   refPtr = refPtr.next;
  //   count++;
  // }

  // while(refPtr!== null){
  //   refPtr = refPtr.next
  //   mainPtr = mainPtr.next;
  // }
  // return mainPtr.data

  // let stack = []
  // while(head) {
  //   stack.push(head.data);
  //   head = head.next;
  // }

  // console.log(stack)

function getNode(head, position) {
    var stack = [];
    var curNode = head;
    
    while(curNode) {
        stack.push(curNode.data);
        curNode = curNode.next;
    }
    
    while(position) {
        stack.pop();
        position--;
    }
    
    return stack.pop();
}

// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const position = parseInt(readLine(), 10);

        let result = getNode(llist.head, position);

        ws.write(result + "\n");
    }

    ws.end();
}
