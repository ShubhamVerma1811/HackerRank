function processData(input) {
  input = input.split("\n");
  let inp = Array.from(input);
  let stack = [];
  let y;
  inp.shift();
  inp.map((i) => {
    y = i.split(" ");
    if (y[0] === "1") stack.push(Number(y[1]));
    else if (y[0] === "2") stack.pop();
    else console.log(Math.max(...stack));
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
