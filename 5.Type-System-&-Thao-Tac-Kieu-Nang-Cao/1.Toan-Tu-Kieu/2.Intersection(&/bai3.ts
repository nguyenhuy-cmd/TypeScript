/*
Xây dựng hàm Generic extendObject an toàn kiểu
Trong JavaScript, ta thường dùng Object.assign({}, objA, objB) hoặc Spread { ...objA, ...objB } để gộp 2 đối tượng.

Viết hàm generic extendObject<T U extends object object,>(base: T, extension: U): T & U:

Sử dụng toán tử spread để gộp 2 đối tượng và trả về kết quả có kiểu T & U.

Cho dữ liệu kiểm thử:

TypeScript
const baseData = { title: "TypeScript Handbook", author: "Anders Hejlsberg" };
const metadata = { version: 5.5, isPublished: true };
Gọi hàm const book = extendObject(baseData, metadata); và chứng minh book có thể truy cập đầy đủ tất cả 4 thuộc tính mà không cần ép kiểu.
*/
function extendObject<T extends object, U extends object>(
  base: T,
  extension: U
): T & U {
  return { ...base, ...extension };
}

const baseData = { title: "TypeScript Handbook", author: "Anders Hejlsberg" };
const metadata = { version: 5.5, isPublished: true };
const book = extendObject(baseData, metadata);
console.log(book.title);
console.log(book.author);
console.log(book.version);
console.log(book.isPublished);



