/*
Định nghĩa cấu trúc Object, Tuple & Mở rộng bằng Intersection

Tạo Type Alias GeoPoint là một Tuple gồm 2 số: [latitude: number, longitude: number].

Tạo Type Alias BaseEntity là một Object chứa:

id: chuỗi ký tự không được phép sửa đổi (readonly).

createdAt: đối tượng Date.

Tạo Type Alias StoreLocation bằng cách kết hợp (Intersection Type &) giữa BaseEntity và một Object mới chứa:

name: chuỗi ký tự.

coordinates: kiểu GeoPoint.

isOpen: kiểu boolean tùy chọn (optional).
*/
type GeoPoint = [latitude: number, longitude: number];
type BaseEntity = {
    readonly id: string;
    createdAt:  Date; 
}
type StoreLocation = BaseEntity & {
    name: string;
    coordinates:  GeoPoint;
    isOpen?: boolean;
}