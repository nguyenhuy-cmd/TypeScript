/*
Đơn kế thừa và Mở rộng thuộc tính cơ bản
Xây dựng mô hình người dùng phân quyền:

Định nghĩa interface User:

id: chuỗi ký tự chỉ đọc (readonly).

email: chuỗi ký tự.

createdAt: đối tượng Date.

Định nghĩa interface AdminUser extends User:

Thêm thuộc tính permissions: mảng chuỗi (string[]).

Thêm phương thức banUser(userId: string): void.

Khởi tạo một đối tượng superAdmin tuân thủ kiểu AdminUser.
*/
interface User{
    readonly id: string;
    email: string;
    createdAt: Date;
}
interface AdminUser extends User{
    permissions: string[];
    banUser(userId: string): void
}
const superAdmin: AdminUser = {
    id: "123",
    email: "huy@gmail.com",
    createdAt: new Date(),

    permissions: ["1", "2","3"],
    banUser(userId: string): void{
        console.log(`Đã bán User ${userId}`);
        
    }
}
console.log(superAdmin.id);
console.log(superAdmin.email);
console.log(superAdmin.createdAt);
console.log(superAdmin.permissions);
