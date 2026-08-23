/*
Mở rộng Middleware Express Request (Module Augmentation)
Trong ứng dụng Node.js/Express, middleware xác thực thường gắn thêm thông tin người dùng currentUser vào đối tượng Request của Express.

Giả sử interface ExpressRequest ban đầu có cấu trúc:

TypeScript
interface ExpressRequest {
  url: string;
  method: string;
}
Yêu cầu:

Áp dụng Declaration Merging để mở rộng ExpressRequest, bổ sung thêm thuộc tính tùy chọn currentUser?: { id: string; role: "admin" | "user" }.

Viết một hàm middleware giả lập authMiddleware(req: ExpressRequest) gán giá trị cho req.currentUser một cách an toàn.
*/