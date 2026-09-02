/*
Trích xuất kiểu cấu hình thực tế (Config Extraction)
Trong dự án, ta thường có một file cấu hình mặc định:

TypeScript
const appConfig = {
  appName: "SystemManager",
  port: 8080,
  features: {
    enableLogs: true,
    maxRetries: 3,
  },
  supportedLocales: ["en", "vi"],
};
Yêu cầu:

Dùng toán tử typeof để tạo type AppConfig dựa trên đối tượng appConfig ở trên.

Dùng AppConfig để định nghĩa một biến customConfig: AppConfig với giá trị hợp lệ.

Thử gán customConfig.port = "8080" (chuỗi) để kiểm tra TypeScript có tự động nhận diện port phải là number hay không.
*/
const appConfig = {
  appName: "SystemManager",
  port: 8080,
  features: {
    enableLogs: true,
    maxRetries: 3,
  },
  supportedLocales: ["en", "vi"],
};
// 1. Trích xuất kiểu của appConfig
type AppConfig = typeof appConfig;

// 2. Định nghĩa cấu hình mới
const customConfig: AppConfig = {
    appName: "Huy",
  port: 9090,
  features: {
    enableLogs: true,
    maxRetries: 4,
  },
  supportedLocales: ["vi"],
}
/*
Lỗi: Kiểu 'string' không thể gán cho kiểu 'number'.
*/