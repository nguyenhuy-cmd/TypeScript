/*
Lấy danh sách Keys và Values sạch
Khác với Numeric Enum bị dính các chuỗi số ('0', '1'), String Enum cho phép duyệt key và value trực tiếp:

Sử dụng lại OrderStatus.

Dùng Object.keys() và Object.values() để lấy ra:

Mảng chứa tất cả các tên khóa (Keys).

Mảng chứa tất cả các giá trị chuỗi (Values).

Viết hàm kiểm tra một giá trị chuỗi bất kỳ có tồn tại trong Enum hay không bằng Object.values().
*/
import { OrderStatus } from "./bai1";

console.log(Object.keys(OrderStatus));
console.log(Object.values(OrderStatus));

function isValidOrderStatus(value: string): boolean{
    return Object.values(OrderStatus).includes(value as OrderStatus);
}
console.log(isValidOrderStatus("PENDING"));
// true

console.log(isValidOrderStatus("SHIPPED"));
// true

console.log(isValidOrderStatus("ABC"));
// false
