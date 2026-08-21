/*
Xác định giá trị ngầm định (Auto-increment)
Cho các Enum sau, hãy xác định giá trị số cụ thể của từng thành viên:

TypeScript
// Case 1: Mặc định
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Case 2: Gán mốc ngắt quãng
enum HttpStatus {
  OK = 200,
  Created,
  Accepted,
  BadRequest = 400,
  Unauthorized,
  InternalServerError = 500
}
Yêu cầu: Liệt kê giá trị của Direction.Left, HttpStatus.Created, và HttpStatus.Unauthorized.
*/
/*
Direction.Left = 2 (Do Up = 0, Down = 1, Left = 2, Right = 3).

HttpStatus.Created = 201 (Tự động tăng từ OK = 200).

HttpStatus.Unauthorized = 401 (Tự động tăng từ BadRequest = 400).
*/