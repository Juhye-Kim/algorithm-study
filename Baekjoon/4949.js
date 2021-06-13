function solution(input) {
  var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  // input = input.toString().trim().split("\n");
  let result = [];

  for (let i = 0; i < input.length - 1; i++) {
    let stack = [];
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "(" || input[i][j] === "[") stack.push(input[i][j]);
      if (input[i][j] === ")" && stack[stack.length - 1] === "(") stack.pop();
      if (input[i][j] === "]" && stack[stack.length - 1] === "[") stack.pop();
    }
    if (stack.length === 0) result.push("yes");
    else result.push("no");
  }
  console.log(result.join("\n"));
}

// solution(`So when I die (the [first] I will see in (heaven) is a score list).
// [ first in ] ( first out ).
// Half Moon tonight (At least it is better than no Moon at all].
// A rope may form )( a trail in a maze.
// Help( I[m being held prisoner in a fortune cookie factory)].
// ([ (([( [ ] ) ( ) (( ))] )) ]).
//  .
// .`);

solution(`ab
sdf
.`);
