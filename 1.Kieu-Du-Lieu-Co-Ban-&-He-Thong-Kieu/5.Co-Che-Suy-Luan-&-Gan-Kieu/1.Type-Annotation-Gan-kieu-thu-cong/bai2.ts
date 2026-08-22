/*
Khắc phục lỗi gán sai kiểu và biến implicit any
Cho đoạn code sau:

TypeScript
// 1.
let config; 
config = { theme: "dark" };
config = 404;

// 2.
let timeout: number = "5000";

// 3.
function multiply(x: number, y) {
  return x * y;
}
Yêu cầu:

Giải thích lý do đoạn code 1 và 3 tiềm ẩn rủi ro (liên quan đến any).

Sửa lại đoạn code 1 để config chỉ được phép nhận đối tượng có cấu trúc { theme: string }.

Sửa lỗi Type Error ở đoạn code 2 và gắn Type Annotation đầy đủ cho tham số và kiểu trả về của hàm ở đoạn code 3.
*/

// 1. lí do tiềm ẩn rủi ro vì: Chúng chưa khai kểu biến -> kiểu là any
// 2. Sửa lại
let config: {theme: string}
config = { theme: "dark" };
// 3.
let timeout: number = 5000;
function multiply(x: number, y: number): number {
  return x * y;
}