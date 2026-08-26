/*
Khai báo và Tuân thủ thứ tự tham số
Xét các chữ ký hàm sau:

TypeScript
// Chữ ký 1
function buildName(firstName: string, lastName?: string): string;

// Chữ ký 2
function setupConnection(timeout?: number, host: string): void;

// Chữ ký 3
function calculateDiscount(price: number, discountRate?: number, couponCode?: string): number;
Yêu cầu:

Xác định chữ ký hàm nào bị lỗi biên dịch và giải thích lý do.

Sửa lại chữ ký bị lỗi để hợp lệ theo chuẩn của TypeScript.
*/
// Chữ kí 2 bị lỗi
function setupConnection(timeout: number, host?: string): void{}