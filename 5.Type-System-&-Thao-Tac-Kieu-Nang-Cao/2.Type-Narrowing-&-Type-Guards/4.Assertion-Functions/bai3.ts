/*
Generic Assertion Function cho điều kiện logic (asserts condition)
Viết hàm assert kinh điển tương tự như module assert trong Node.js:

Định nghĩa hàm:

TypeScript
function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg ?? "Assertion failed");
  }
}
Cho biến user: { name: string; age?: number } = { name: "Alice" };

Dùng hàm assert(typeof user.age === "number", "Age is missing");.

Kiểm tra kiểu suy luận của user.age ở các dòng lệnh tiếp theo.
*/
function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg ?? "Assertion failed");
  }
}
const user: { name: string; age?: number } = { name: "Alice" };
assert(typeof user.age === "number", "Age is missing");
console.log(user.age);
