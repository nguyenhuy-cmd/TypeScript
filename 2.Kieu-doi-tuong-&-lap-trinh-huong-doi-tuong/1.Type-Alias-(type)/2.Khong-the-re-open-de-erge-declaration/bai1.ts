/*
Quan sát lỗi trùng lặp định danh với type
Xét hai đoạn mã sau:

TypeScript
// Thao tác 1: Dùng interface
interface UserProfile {
  name: string;
}
interface UserProfile {
  age: number;
}

// Thao tác 2: Dùng type alias
type AccountConfig = {
  theme: string;
};
type AccountConfig = {
  notifications: boolean;
};
Yêu cầu:

Giải thích điều gì xảy ra ở Thao tác 1 và Thao tác 2 khi biên dịch.

Viết lại Thao tác 2 theo cách chuẩn mực của type để kết hợp cả 2 thuộc tính trên.
*/
/*
- Thao tác 1: Cho phép mở lại và gộp thành 1
- Thao tác 2: Báo lỗi
*/