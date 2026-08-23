/*
Gộp thuộc tính và xử lý xung đột kiểu
Xét các khai báo sau:

TypeScript
// Lần khai báo 1
interface UserSettings {
  theme: "light" | "dark";
  fontSize: number;
}

// Lần khai báo 2
interface UserSettings {
  autoSave: boolean;
  fontSize: string; // Dòng này có hợp lệ không?
}
Yêu cầu:

Chỉ ra lỗi biên dịch trong đoạn code trên và giải thích nguyên tắc Declaration Merging đối với thuộc tính không phải hàm (non-function members).

Sửa lại đoạn code để khởi tạo một đối tượng settings hoàn chỉnh sau khi gộp.
*/
// Lỗi là fontSize nhưng khác kiểu
//Sửa:
interface UserSettings {
  theme: "light" | "dark";
  autoSave: boolean;
  fontSize: number;
}