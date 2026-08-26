/*
Thiết kế mẫu khởi tạo Factory Method & Đếm Instance
Xây dựng class User áp dụng static để quản lý số lượng đối tượng và cung cấp các hàm tạo chuyên biệt (Factory Pattern):

Thuộc tính private static instanceCount: number = 0.

Thuộc tính public instance: id: string, role: "ADMIN" | "USER".

Khai báo private constructor để ngăn chặn việc gọi new User(...) tự do từ bên ngoài.

Viết static method:

public static createAdmin(id: string): User: Tạo User với role "ADMIN" và tăng instanceCount.

public static createGuest(): User: Tạo User với role "USER", sinh id ngẫu nhiên và tăng instanceCount.

public static getInstanceCount(): number: Trả về tổng số User đã được tạo.
*/
class User{
    private static instanceCount: number = 0;
    private constructor(public id: string, public role: "ADMIN" | "USER"){}

    public static createAdmin(id: string): User{
        User.instanceCount++;
        return new User(id, "ADMIN")
    }

    public static createGuest(): User{
        User.instanceCount++;
        const id = `USER_${Math.floor(Math.random() * 10000)}`;
        return new User(id, "USER")
    }

    public static getInstanceCount(): number{
        return User.instanceCount;
    }
}
const admin = User.createAdmin("ADMIN_01");
const user1 = User.createGuest();

console.log(admin);
console.log(user1);
console.log(User. getInstanceCount);


