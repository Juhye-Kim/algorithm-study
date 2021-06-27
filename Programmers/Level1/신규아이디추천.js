// 프로그래머스 신규아이디추천

// ver1
function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-\_\.]/gi, "")
    .replace(/\.{2,}/g, ".");
  let removed = true;
  while (removed) {
    if (new_id.substr(0, 1) === ".") {
      new_id = new_id.substr(1, new_id.length);
      removed = true;
    } else if (new_id.substr(new_id.length - 1) === ".") {
      new_id = new_id.substr(0, new_id.length - 1);
      removed = true;
    } else {
      removed = false;
    }
  }
  if (new_id.length === 0) new_id = "a";
  if (new_id.length >= 16) new_id = new_id.substr(0, 15);

  removed = true;
  while (removed) {
    if (new_id.substr(new_id.length - 1) === ".") {
      new_id = new_id.substr(0, new_id.length - 1);
      removed = true;
    } else {
      removed = false;
    }
  }
  if (new_id.length <= 2) {
    new_id += new_id.substr(new_id.length - 1).repeat(3 - new_id.length);
  }
  return new_id;
}

// ver2
function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
