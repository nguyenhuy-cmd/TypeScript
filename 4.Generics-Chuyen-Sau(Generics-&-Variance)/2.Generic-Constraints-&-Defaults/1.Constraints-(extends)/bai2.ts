/*
Ràng buộc khóa đối tượng an toàn với K extends keyof T
Viết hàm tiện ích trích xuất giá trị thuộc tính an toàn (Type-safe Property Getter):

Định nghĩa hàm getProperty<T, K T extends keyof>(obj: T, key: K): T[K].

Hàm nhận vào một đối tượng obj và một khóa key hợp lệ của đối tượng đó, trả về đúng kiểu dữ liệu của thuộc tính tương ứng.

Thử nghiệm với đối tượng:

TypeScript
const product = {
  id: "PROD_99",
  price: 450,
  isAvailable: true,
};
Kiểm tra việc gọi hàm với key hợp lệ ("price") và key không tồn tại ("discount").
*/
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const product = {
  id: "PROD_99",
  price: 450,
  isAvailable: true,
};
// Hợp lệ
const price = getProperty(product, "price"); // number
const idd = getProperty(product, "id");
console.log(`Price: $${price}`);


// 2. Báo lỗi compile-time khi truyền sai key:
// const discount = getProperty(product, "discount");
// Lỗi: Argument of type '"discount"' is not assignable to parameter of type '"id" | "price" | "isAvailable"'.