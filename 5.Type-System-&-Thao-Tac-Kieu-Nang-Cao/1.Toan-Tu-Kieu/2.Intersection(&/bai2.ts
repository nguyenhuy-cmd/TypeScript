/*
Hiện tượng xung đột kiểu và suy biến về never
Xét đoạn mã sau:

TypeScript
type LegacyConfig = {
  port: string;
  debug: boolean;
};

type ModernConfig = {
  port: number;
  environment: "DEV" | "PROD";
};

type AppConfig = LegacyConfig & ModernConfig;
Yêu cầu:

Xác định kiểu của thuộc tính AppConfig["port"] sau khi gộp bằng &.

Thử tạo một đối tượng const config: AppConfig = { ... }. Liệu có thể gán giá trị hợp lệ cho thuộc tính port được không? Giải thích lý do.
*/
// 1. Kiểu của AppConfig["port"] là never vì string & number không có điểm giao (không giá trị nào vừa là string vừa là number).
/*
2. không thể gán giá trị hợp lệ  cho port vì
Khi xảy ra xung đột kiểu nguyên thủy, TypeScript đưa thuộc tính đó về never, khiến object type này trở nên "bất khả thi" để khởi tạo đầy đủ ở runtime.
*/