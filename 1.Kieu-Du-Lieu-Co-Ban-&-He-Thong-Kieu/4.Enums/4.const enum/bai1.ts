/*
So sánh mã JavaScript đầu ra
Cho hai định nghĩa enum sau:

TypeScript
// 1. Regular Enum
enum RegularDirection {
  Up = "UP",
  Down = "DOWN",
}

// 2. Const Enum
const enum ConstDirection {
  Up = "UP",
  Down = "DOWN",
}

const move1 = RegularDirection.Up;
const move2 = ConstDirection.Up;
Yêu cầu: Viết mã JavaScript tương ứng được sinh ra sau khi biên dịch cho move1 và move2.
*/

var RegularDirection;
(function (RegularDirection) {
    RegularDirection["Up"] = "UP";
    RegularDirection["Down"] = "DOWN";
})(RegularDirection || (RegularDirection = {}));

var move1 = RegularDirection.Up;

// Const Enum bị xóa hoàn toàn, giá trị "UP" được inline trực tiếp:
var move2 = "UP"; /* ConstDirection.Up */