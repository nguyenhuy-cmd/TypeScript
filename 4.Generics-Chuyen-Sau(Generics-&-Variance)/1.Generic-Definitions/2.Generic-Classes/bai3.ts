/*
Generic Repository Pattern với Quản lý Khóa Chính
Xây dựng một InMemory Repository dùng chung cho các Entity:

Định nghĩa interface Identifiable:

TypeScript
interface Identifiable {
  id: string | number;
}
Tạo class Repository<T Identifiable extends>:

Thuộc tính private records: Map<T["id"], T> = new Map().

Phương thức save(item: T): void: Lưu item theo item.id.

Phương thức findById(id: T["id"]): T | undefined: Tìm đối tượng theo ID.

Phương thức findAll(): T[]: Trả về toàn bộ danh sách bản ghi dưới dạng mảng.

Phương thức deleteById(id: T["id"]): boolean: Xóa bản ghi theo ID và trả về trạng thái xóa thành công hay không.

Tạo interface User extends Identifiable { id: number; name: string; email: string; } và khởi tạo một Repository<User> để kiểm thử.
*/
interface Identifiable {
  id: string | number;
}
class Repository<T extends Identifiable >{
    private records: Map<T["id"], T> = new Map();
    save(item: T): void{
        this.records.set(item.id, item);
    }

    findById(id: T["id"]): T | undefined{
        return this.records.get(id);
    }

    findAll(): T[]{
        return Array.from(this.records.values());
    }

    deleteById(id: T["id"]): boolean{
        return this.records.delete(id);
    }
}
interface User extends Identifiable { id: number; name: string; email: string; };
const userRepository = new Repository<User>();

userRepository.save({id: 1, name: "Alice", email: "alice@test.dev"});
userRepository.save({ id: 2, name: "Bob", email: "bob@test.dev" });
const user = userRepository.findById(1);
console.log(user?.name); // "Alice"
