/*
Phân biệt hành vi Compile-time (unknown vs any)
Cho đoạn code sau. Hãy giải thích tại sao TypeScript báo lỗi ở các dòng được đánh dấu và viết lại đoạn code xử lý an toàn bằng typeof:

TypeScript
function processValue(val: unknown) {
  val.trim();              // Lỗi: Object is of type 'unknown'
  val.toFixed(2);          // Lỗi: Object is of type 'unknown'
  console.log(val.length); // Lỗi: Object is of type 'unknown'
}
Yêu cầu:

Sử dụng Type Narrowing (typeof) để kiểm tra val:

Nếu là string: in ra chuỗi đã loại bỏ khoảng trắng thừa (trim()) và độ dài của chuỗi.

Nếu là number: in ra số với định dạng 2 chữ số thập phân (toFixed(2)).

Các trường hợp còn lại: in ra "Unhandled type".
*/
function processValue(val: unknown) {
  if (typeof val === "string") {
    console.log(val.trim());
    console.log(val.length);

  } else if (typeof val === "number") {
    console.log(val.toFixed(2));
  } else {
    console.log("Unhandled type");
  }
}