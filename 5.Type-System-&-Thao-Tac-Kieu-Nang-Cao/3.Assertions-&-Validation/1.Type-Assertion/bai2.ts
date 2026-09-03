/*
Double Assertion và Bẫy Ép Kiểu Bất Hợp Lệ
Xét các phép ép kiểu sau:

TypeScript
type ServerPort = number;
const rawPort = "8080";

// Dòng 1:
const port1 = rawPort as ServerPort;

// Dòng 2:
const port2 = rawPort as unknown as ServerPort;
Yêu cầu:

Giải thích vì sao Dòng 1 bị TypeScript báo lỗi biên dịch và chỉ rõ thông báo lỗi compiler đưa ra.

Tại sao Dòng 2 lại vượt qua được sự kiểm tra của compiler?

Giá trị của port2 tại runtime là gì? Việc gọi port2.toFixed(2) sau đó sẽ dẫn đến kết quả gì?
*/
// 1. Báo l;ỗi vì 2 kiểu dữ dữ liệu khác nhau, 1 cái là number, 1 cai là string
// 2. Vì sử dụng Double Assertion
// máy tính tưởng num bẻ nhưng vẫn là string, khi sử dụng port2.toFixed(2) vì thực chất nó vẫn là string 