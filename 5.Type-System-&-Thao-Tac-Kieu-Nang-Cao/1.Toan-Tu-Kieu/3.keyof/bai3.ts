/*
Xây dựng hàm trích xuất thuộc tính an toàn (pickSingleField)
Viết một hàm tiện ích sử dụng keyof để đọc an toàn một trường bất kỳ từ một đối tượng:

Định nghĩa hàm getField<T, K T extends keyof>(data: T, property: K): T[K].

Cho đối tượng:

TypeScript
const serverConfig = {
  host: "localhost",
  port: 3000,
  secure: false,
};
Gọi hàm để lấy thuộc tính host và port.

Kiểm tra kiểu suy luận của giá trị trả về tương ứng.
*/
function getField<T, K extends keyof T>(data: T, property: K): T[K] {
  return data[property];
}
const serverConfig = {
  host: "localhost",
  port: 3000,
  secure: false,
};

type hostKey = keyof typeof serverConfig;
// host kiểu: string
// port kiểu: number
// secure: boolean