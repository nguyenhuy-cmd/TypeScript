/*
Khởi tạo nâng cao với Static Initialization Blocks (static {})
Trong một số trường hợp, thuộc tính static cần logic xử lý nhiều bước, kết nối môi trường hoặc bắt lỗi try...catch ngay khi nạp class.

Tạo class DatabaseRegistry:

Thuộc tính private static connectionPool: string[] = [].

Thuộc tính public static readonly defaultTimeout: number.

Viết khối static { ... } bên trong class:

Khởi tạo mảng connectionPool với 3 chuỗi kết nối: ["CONN_1", "CONN_2", "CONN_3"].

Gán giá trị cho defaultTimeout = 5000.

In ra màn hình log: "DatabaseRegistry initialized with 3 connections".

Viết static method getConnection(): string lấy phần tử đầu tiên ra khỏi connectionPool.
*/
class DatabaseRegistry{
    private static connectionPool: string[] = [];
    public static readonly defaultTimeout: number;

    static {
        DatabaseRegistry.connectionPool = ["CONN_1", "CONN_2", "CONN_3"];
        DatabaseRegistry.defaultTimeout = 5000;
        console.log("DatabaseRegistry initialized with 3 connections");
        
    }

    static getConnection(): string{
        return DatabaseRegistry.connectionPool.shift()!;
    }
}
console.log(DatabaseRegistry.getConnection());
