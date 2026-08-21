/*
Union Types & Literal Types
Tạo kiểu dữ liệu và hàm xử lý trạng thái giao dịch:

Định nghĩa type PaymentStatus chỉ nhận 1 trong 3 giá trị: "PENDING", "SUCCESS", "FAILED".

Định nghĩa type Amount có thể là number hoặc chuỗi có định dạng số string.

Viết hàm formatPayment(amount: Amount, status: PaymentStatus): string trả 
về định dạng: "[STATUS] - Amount: X" (với X luôn là số thập phân 2 chữ số, ví dụ: 100.00).
*/
type PaymentStatus = "PENDING" | "FAILED" | "SUCCESS";
type Amount = number | string;

function formatPayment(amount: Amount, status: PaymentStatus): string {
    const numberAmount = Number(amount);
    return `[${status}] - Amount: ${numberAmount.toFixed(2)}`
}