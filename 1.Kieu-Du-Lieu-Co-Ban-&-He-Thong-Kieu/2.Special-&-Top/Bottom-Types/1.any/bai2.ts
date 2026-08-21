/*
Sự "lây lan" kiểu (Type Contamination)
any có tính chất lây lan sang các biến khác mà nó tương tác cùng. Hãy kiểm tra đoạn code sau:

TypeScript
function parsePayload(jsonString: string): any {
  return JSON.parse(jsonString);
}

const payload = parsePayload('{"userId": 101}');
const userId = payload.userId; // Kiểu của userId là gì?
const result = userId + 10;    // Kiểu của result là gì?
Yêu cầu:

Xác định kiểu dữ liệu ngầm định (inferred type) của userId và result.

Sửa lại hàm parsePayload và đoạn code trên để loại bỏ hoàn toàn any, đảm bảo an toàn kiểu dữ liệu (gợi ý: dùng Generic hoặc unknown).
*/
//Sửa lại:
interface UserPayload {
  userId: number;
}
function parsePayload<T>(jsonString: string): T {
  return JSON.parse(jsonString) as T;
}

const payload = parsePayload<UserPayload>('{"userId": 101}');
const userId = payload.userId;
const result = userId + 10;    