/*
Phân biệt any vs unknown & Type Narrowing
Viết hàm processInput(input: unknown): string thỏa mãn:

Nếu input là string, trả về chuỗi viết hoa (input.toUpperCase()).

Nếu input là number, trả về bình phương của nó dưới dạng chuỗi ((input * input).toString()).

Nếu là các kiểu dữ liệu khác, trả về chuỗi "Unsupported type".

Yêu cầu: Không dùng ép kiểu thô bạo (as), sử dụng typeof để kiểm tra an toàn.
*/

function processInput(input: unknown): string {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return (input * input).toString()
    } else {
        return "Unsupported type";
    }
}