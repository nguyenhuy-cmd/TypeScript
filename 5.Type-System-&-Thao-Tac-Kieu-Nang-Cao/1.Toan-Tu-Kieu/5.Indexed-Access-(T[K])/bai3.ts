/*
Indexed Access kết hợp Union Keys
Cho cấu trúc cấu hình dịch vụ:

TypeScript
type ServiceConfig = {
  host: string;
  port: number;
  useSsl: boolean;
  timeout: number;
  apiKey: string;
};
Yêu cầu:

Tạo type NetworkTypes bằng cách tra cứu đồng thời hai khóa "host" và "port" trên ServiceConfig trong một dòng lệnh.

Tạo type AllValues bằng cách kết hợp toán tử keyof và cú pháp Indexed Access ServiceConfig[keyof ServiceConfig]. 
Xác định tập hợp kiểu kết quả của AllValues.
*/
type ServiceConfig = {
  host: string;
  port: number;
  useSsl: boolean;
  timeout: number;
  apiKey: string;
};
type NetworkTypes = ServiceConfig["host" | "port"];

//2. Trích xuất toàn bộ kiểu của tất cả các giá trị trong đối tượng
type AllValues = ServiceConfig[keyof ServiceConfig];
// Kiểu cụ thể: string | number | boolean