/*
Typing this trong Fluent API / Method Chaining
Xây dựng một lớp truy vấn kiểu Fluent API (Method Chaining) nơi mỗi phương thức trả về chính đối tượng đang gọi nó (this):

Định nghĩa class QueryBuilder:

Thuộc tính private queryParts: string[] = [].

Phương thức select(this: QueryBuilder, fields: string): this: Thêm "SELECT " + fields vào mảng và trả về this.

Phương thức where(this: QueryBuilder, condition: string): this: Thêm "WHERE " + condition vào mảng và trả về this.

Phương thức build(this: QueryBuilder): string: Nối các phần tử bằng dấu cách và trả về câu lệnh hoàn chỉnh.
*/
class QueryBuilder{
    private queryParts: string[] = [];
    select(fields: string): this{
        this.queryParts.push("SELECT " + fields);
        return this;
    }

    build(): string{
        return this.queryParts.join(" ")
        
    }

    where(condition: string): this{
        this.queryParts.push("WHERE " + condition);
        return this
    }

}