/*
Khai báo Annotation cho Biến & Hàm cơ bản
Sử dụng Type Annotation để định kiểu tường minh cho các trường hợp sau:

Biến accountId: có thể là số (number) hoặc chuỗi (string), khởi tạo với giá trị 12345.

Biến isLoaded: kiểu boolean, chưa gán giá trị ngay lúc khai báo.

Hàm formatCurrency:

Nhận tham số amount (bắt buộc kiểu số) và symbol (tùy chọn - optional, kiểu chuỗi).

Trả về chuỗi kết hợp định dạng tiền tệ (ví dụ: formatCurrency(100, "$") trả về "$100").
*/
const accountId: number|string = 12345;
let isLoaded: boolean;

function formatCurrency(amount: number, symbol?: string){
    return `${symbol}${amount}`;
}
console.log(formatCurrency(100, "$"));
