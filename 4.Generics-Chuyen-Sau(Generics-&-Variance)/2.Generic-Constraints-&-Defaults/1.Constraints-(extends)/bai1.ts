/*
Ràng buộc cấu trúc cơ bản (length property)
Xét hàm đo độ dài:

TypeScript
function getLength<T>(item: T): number {
  return item.length; // TypeScript báo lỗi tại đây
}
Yêu cầu:

Giải thích lý do vì sao hàm trên báo lỗi biên dịch.

Sửa lại hàm bằng cách áp dụng Generic Constraint <T extends length: number { }> để hàm có thể nhận string, Array, 
hoặc bất kỳ đối tượng nào có thuộc tính length, đồng thời từ chối kiểu number hoặc boolean.
*/
/* 
Nguyên nhân: Nguyên nhân: Vì T đại diện cho kiểu dữ liệu bất kỳ, compiler không thể đảm bảo kiểu truyền vào lúc runtime 
sẽ luôn có thuộc tính length (ví dụ nếu truyền vào một số 123 thì (123).length là undefined).
*/
//Cách sửa:
function getLength<T extends { length: number}>(item: T): number {
  return item.length; 
}
// Hợp lệ:
console.log(getLength("Hello TypeScript"));   // 16 (string có thuộc tính length)
console.log(getLength([1, 2, 3, 4]));         // 4 (array có thuộc tính length)
console.log(getLength({ length: 10, data: "" })); // 10

// Lỗi compile-time ngay lập tức:
// getLength(12345);
// Lỗi: Đối số thuộc kiểu 'number' không thể gán cho tham số thuộc kiểu '{ length: number; }'.