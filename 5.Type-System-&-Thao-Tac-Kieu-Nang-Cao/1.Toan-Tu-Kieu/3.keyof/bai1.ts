/*
Trích xuất Keys từ cấu trúc có sẵn
Cho kiểu dữ liệu sau:

TypeScript
type UserSession = {
  token: string;
  expiresAt: number;
  isActive: boolean;
  refreshToken?: string;
};
Yêu cầu:

Dùng toán tử keyof để định nghĩa type SessionKey.

Xác định kiểu cụ thể (Literal Union) của SessionKey.

Khởi tạo một biến const key: SessionKey = "role"; và giải thích lỗi do TypeScript đưa ra.
*/
type UserSession = {
  token: string;
  expiresAt: number;
  isActive: boolean;
  refreshToken?: string;
};
type SessionKey = keyof UserSession;
// Kiểu cụ thể là Literal Union

//const key: SessionKey = "role";
// Giải thích lỗi: Vì không có key trong UserSession