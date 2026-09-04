/*
Nhận diện lỗi Excess Property trên Object Literal
Xét cấu hình kết nối cơ sở dữ liệu:

TypeScript
interface DatabaseOptions {
  host: string;
  port?: number;
  ssl?: boolean;
}

function connectDatabase(options: DatabaseOptions): void {
  console.log(`Connecting to ${options.host}:${options.port ?? 5432}`);
}
Yêu cầu:

Thực hiện gọi hàm sau và chỉ rõ lỗi mà TypeScript đưa ra:

TypeScript
connectDatabase({
  host: "localhost",
  port: 5432,
  secue: true, // Gõ nhầm chính tả của 'ssl'
});
Thử gán object trên vào một biến const rawConfig = { ... } trước, 
sau đó truyền rawConfig vào connectDatabase. Giải thích vì sao TypeScript không còn báo lỗi.
*/
//1. Lỗi vì ở interface là ssl nhưng ở dưới lại là secue nên báo lỗi
//2. không báo lỗi vì nó đã được qua 1 biến trung gian