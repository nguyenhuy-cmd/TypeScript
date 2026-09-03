/*
Const Assertions với Generic Functions (TS 5.0+ const Type Parameters)
Xét hàm tiện ích trả về mảng tuple:

TypeScript
function createPair<const T, const U>(first: T, second: U) {
  return [first, second] as const;
}

const pair = createPair("admin", 100);
Yêu cầu:

Xác định kiểu suy luận của biến pair.

Nếu bỏ từ khóa const trước generic parameters (<T, U>), kiểu suy luận của pair sẽ trở thành gì?
*/
// 1. kiểu suy luận của pain là redonly["admin", 100]
// 2. Lúc này sẽ bị nới rộng và trở thành: T suy luận thành string, U suy luận thành number 