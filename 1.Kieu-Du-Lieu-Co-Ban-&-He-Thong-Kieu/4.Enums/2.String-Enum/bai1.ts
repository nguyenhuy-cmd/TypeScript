/*
Khai báo String Enum & Phân tích cấu trúc Runtime

Định nghĩa một enum OrderStatus gồm các trạng thái: PENDING = "PENDING", SHIPPED = "SHIPPED", DELIVERED = "DELIVERED", CANCELLED = "CANCELLED".

Viết cấu trúc đối tượng JavaScript thuần được sinh ra sau khi biên dịch enum này.

Thử truy cập ánh xạ ngược OrderStatus["PENDING" as any] và cho biết kết quả trả về là gì.
*/
export enum OrderStatus {
    PENDING = "PENDING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}
console.log(OrderStatus.PENDING);
console.log(OrderStatus.SHIPPED);
console.log(OrderStatus.DELIVERED);
console.log(OrderStatus.CANCELLED);

console.log(OrderStatus["PENDING"]);