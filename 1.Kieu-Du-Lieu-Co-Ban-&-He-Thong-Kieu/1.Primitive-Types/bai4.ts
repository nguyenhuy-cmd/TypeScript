/*
Enum và Kiểu never (Exhaustive Check)
Định nghĩa Enum và kiểm tra tính toàn vẹn của logic:

Tạo enum Role { ADMIN = "ADMIN", USER = "USER", GUEST = "GUEST" }.

Viết hàm getPermissions(role: Role): string[]. Sử dụng switch(role) để trả về danh sách quyền:

ADMIN: ["read", "write", "delete"]

USER: ["read", "write"]

GUEST: ["read"]

default: Sử dụng kiểu never để bắt lỗi tại compile-time nếu sau này có thêm role mới mà chưa được xử lý trong switch-case.
*/

enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}
function getPermissions(role: Role): string[] {
    switch (role) {
        case Role.ADMIN:
            return ["read", "write", "delete"];
            break;
        case Role.USER:
            return ["read", "write"];
            break;
        case Role.GUEST:
            return ["read"];
            break;
        default:
            return assertNever(role);
    }
}
function assertNever(value: never): never {
    throw new Error(`Unexpected role: ${value}`);
}