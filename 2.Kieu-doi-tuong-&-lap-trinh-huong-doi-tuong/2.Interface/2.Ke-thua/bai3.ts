/*
Ghi đè kiểu hợp lệ vs Xung đột kiểu trong Đa kế thừa
Xét hai tình huống kế thừa sau:

TypeScript
// Tình huống 1: Thu hẹp kiểu khi kế thừa đơn
interface BaseResponse {
  statusCode: number | string;
  payload: any;
}

interface StrictJsonResponse extends BaseResponse {
  statusCode: number; // Hợp lệ hay báo lỗi?
  payload: Record<string, string>;
}

// Tình huống 2: Xung đột kiểu khi đa kế thừa
interface SourceA {
  data: string;
}

interface SourceB {
  data: number;
}

interface CombinedSource extends SourceA, SourceB {
  id: string;
}
Yêu cầu:

Tình huống 1 có hợp lệ không? Giải thích nguyên tắc ghi đè kiểu (property narrowing) khi extends.

Tình huống 2 có xảy ra lỗi biên dịch không? Giải thích cách TypeScript xử lý khi hai interface cha 
có cùng tên thuộc tính nhưng kiểu dữ liệu không tương thích.
*/
/*
1. Có hợp lệ vì extends
2. Có xung đọt vì extends 2 interface có cùng data nhưng lại khác nhau về kiểu, gây xung đột
*/