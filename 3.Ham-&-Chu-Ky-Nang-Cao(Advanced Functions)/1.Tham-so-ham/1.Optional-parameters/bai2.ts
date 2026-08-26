/*
Narrowing an toàn khi xử lý tham số tùy chọn
Viết hàm định dạng thông tin người dùng:

Định nghĩa hàm formatUserProfile(userId: string, age?: number, bio?: string): string.

Yêu cầu:

Trả về chuỗi kết hợp theo mẫu:

Nếu có cả age và bio: "User: <userId> | Age: <age> | Bio: <bio>"

Nếu chỉ có age: "User: <userId> | Age: <age>"

Nếu chỉ có bio: "User: <userId> | Bio: <bio>"

Nếu không có cả hai: "User: <userId>"

Đảm bảo kiểm tra kiểu an toàn, tránh in ra từ "undefined" trong chuỗi kết quả.
*/
function formatUserProfile(userId: string, age?: number, bio?: string): string{
    if(age !== undefined && bio !== undefined){
        return(`User: ${userId} | Age: ${age} | Bio: ${bio}`);
    }
    if(age !== undefined && bio === undefined){
        return(`User: ${userId} | Age: ${age}`);
    }
    if(age === undefined && bio !== undefined){
        return(`User: ${userId} | Bio: ${bio}`);
    }
    return(`User: ${userId}`);
}