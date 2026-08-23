/*
Tính chất nông (Shallow Readonly) và cách khắc phục
Xét đoạn mã sau:

TypeScript
interface DatabaseConfig {
  readonly host: string;
  readonly port: number;
  readonly credentials: {
    username: string;
    apiKey: string;
  };
  readonly allowedIps: string[];
}

const dbConfig: DatabaseConfig = {
  host: "localhost",
  port: 5432,
  credentials: {
    username: "admin",
    apiKey: "secret-key-123",
  },
  allowedIps: ["127.0.0.1", "192.168.1.1"],
};

// Kiểm tra tính bất biến:
dbConfig.host = "10.0.0.1";               // (1)
dbConfig.credentials.apiKey = "new-key"; // (2)
dbConfig.allowedIps.push("10.0.0.2");     // (3)
Yêu cầu:

Xác định dòng nào bị TypeScript chặn và dòng nào vẫn thực thi thành công.

Sửa lại DatabaseConfig để biến credentials và allowedIps thành bất biến hoàn toàn (Deep Readonly).
*/
//1. Dòng 1 bị lỗi còn 2 và 3 vẫn chạy bình thương
// Sửa  cho thành bất biến tất:
interface DatabaseConfig {
  readonly host: string;
  readonly port: number;
  readonly credentials: {
    readonly username: string;
    readonly apiKey: string;
  };
  readonly allowedIps: readonly string[];
}