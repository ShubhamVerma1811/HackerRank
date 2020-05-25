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

  while (curNode) {
    stack.push(curNode.data);
    curNode = curNode.next;
  }

  while (position) {
    stack.pop();
    position--;
  }

  return stack.pop();
}

// }
