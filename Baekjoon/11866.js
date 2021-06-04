function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
  input = input.toString().split(" ");
  N = parseInt(input[0]);
  K = parseInt(input[1]) - 1;
  cur = K;

  let people = [];
  for (let i = 1; i <= N; i++) {
    people.push(i);
  }

  let result = [];
  while (people.length) {
    result.push(people[cur]);
    people.splice(cur, 1);
    cur = (cur + K) % people.length;
  }
  console.log("<" + result.join(", ") + ">");
}

// solution(`So when I die (the [first] I will see in (heaven) is a score list).
// [ first in ] ( first out ).
// Half Moon tonight (At least it is better than no Moon at all].
// A rope may form )( a trail in a maze.
// Help( I[m being held prisoner in a fortune cookie factory)].
// ([ (([( [ ] ) ( ) (( ))] )) ]).
//  .
// .`);

solution(`7 3`); // <3, 6, 2, 7, 5, 1, 4>
solution(`5 4`); // <4, 3, 5, 2, 1>
