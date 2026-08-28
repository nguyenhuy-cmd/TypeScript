/*
Hàm trích xuất nhiều thuộc tính (pluck / pickProps)
Xây dựng hàm lấy danh sách giá trị của một thuộc tính từ mảng các đối tượng:

Định nghĩa hàm pluck<T, K T extends keyof>(items: T[], key: K): T[K][]:

Duyệt qua mảng items và trả về một mảng mới chỉ chứa giá trị của thuộc tính key.

Cho mảng dữ liệu:

TypeScript
const products = [
  { sku: "A1", price: 100, tags: ["tech", "sale"] },
  { sku: "B2", price: 250, tags: ["fashion"] },
];
Gọi hàm pluck(products, "sku") và pluck(products, "tags"). Xác định kiểu suy luận trả về 
của từng biến kết quả.
*/
function pluck<T, K extends  keyof T>(items: T[], key: K): T[K][]{
    return items.map(item => item[key]);
}
const products = [
  { sku: "A1", price: 100, tags: ["tech", "sale"] },
  { sku: "B2", price: 250, tags: ["fashion"] },
];

// kiểu trả về tự động suy luận chính xác 
const skus = pluck(products, "sku"); // Kiểu suy luận: string[];
const prices = pluck(products, "price"); // Kiểu suy luận: number[];
const allTag = pluck(products, "tags"); // Kiểu suy luận: string[][]

console.log(skus);
console.log(prices);
console.log(allTag);


