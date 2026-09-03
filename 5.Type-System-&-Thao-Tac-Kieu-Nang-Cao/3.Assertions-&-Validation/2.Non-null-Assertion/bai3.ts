/*
Non-null Assertion trên Map Lookups
Xét cấu trúc dữ liệu lưu cache người dùng:

TypeScript
interface UserProfile {
  id: string;
  name: string;
}

const userMap = new Map<string, UserProfile>();
userMap.set("u_1", { id: "u_1", name: "Alice" });
Yêu cầu:

Phương thức userMap.get("u_1") trả về kiểu gì?

Nếu bạn chắc chắn 100% khóa "u_1" đã tồn tại, hãy dùng Non-null Assertion để lấy thuộc tính name của đối tượng này.

Phân tích điều gì xảy ra nếu sau đó một logic khác gọi userMap.delete("u_1") trước khi dòng code trên thực thi.
*/
interface UserProfile {
  id: string;
  name: string;
}

const userMap = new Map<string, UserProfile>();
userMap.set("u_1", { id: "u_1", name: "Alice" });

// 1. userMap.get("u_1") trả về: UserProfile | undefined
// 2. Dùng Non-null Assertion:
const userName = userMap.get("u_1")!.name;
console.log(userName); // "Alice"
