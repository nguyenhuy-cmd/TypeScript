/*
Tối ưu hóa bundle với const enum & tính toán hằng số
TypeScript hỗ trợ tính toán các biểu thức hằng số (computed const members) trong const enum ngay lúc compile:

Định nghĩa const enum FileAccess:

None = 0

Read = 1 << 1 (tương đương 2)

Write = 1 << 2 (tương đương 4)

ReadWrite = Read | Write

Viết hàm checkPermission(permission: FileAccess): boolean kiểm tra xem người dùng có quyền ghi (Write) hay không bằng toán tử bitwise &.

Dự đoán đoạn code JavaScript được TypeScript sinh ra khi gọi checkPermission(FileAccess.ReadWrite).
*/
const enum FileAccess {
    None = 0,
    Read = 1 << 1, // Tương đương với 2
    Write = 1 << 2, // Tương đương với 4
    ReadWrite = 1 << 1 | 1 << 2
}
function checkPermission(permission: FileAccess): boolean{
    return (permission & FileAccess.Write) === FileAccess.Write;
}
const hasWrite = checkPermission(FileAccess.ReadWrite);
console.log(hasWrite);