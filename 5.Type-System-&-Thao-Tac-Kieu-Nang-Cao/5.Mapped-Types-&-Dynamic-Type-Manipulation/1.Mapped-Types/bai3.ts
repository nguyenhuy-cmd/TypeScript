/*
Xóa bỏ thuộc tính Readonly (-readonly)
Xét một interface bị khóa cứng bởi readonly:

TypeScript
interface ImmutableConfig {
  readonly host: string;
  readonly port: number;
  readonly database: {
    readonly user: string;
  };
}
Yêu cầu:

Viết Mapped Type Mutable<T> sử dụng tiền tố -readonly để cho phép ghi đè các thuộc tính của T.

Tạo biến const editableConfig: Mutable<ImmutableConfig> và gán lại editableConfig.port = 8080.

Liệu thuộc tính editableConfig.database.user có sửa đổi được không? Nêu lý do và cách giải quyết 
nếu muốn xóa readonly ở mọi tầng (Deep Mutable).
*/

interface ImmutableConfig {
  readonly host: string;
  readonly port: number;
  readonly database: {
    readonly user: string;
  };
}

// 1. Mapped Type gỡ bỏ readonly ở tầng nông (Shallow Mutable)
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// 2. Tạo biến và gán lại port thành công
const editableConfig: Mutable<ImmutableConfig> = {
  host: "localhost",
  port: 3000,
  database: {
    user: "admin",
  },
};

editableConfig.port = 8080; // ✅ Hợp lệ

// 3. Kiểm tra tầng sâu:
// editableConfig.database.user = "root"; 
// ❌ LỖI: Cannot assign to 'user' because it is a read-only property.

/*
LÝ DO:
Mapped Type 'Mutable<T>' chỉ tác động ở mức nông (Shallow / Cấp 1).
Nó chỉ gỡ 'readonly' cho 'host', 'port' và bản thân object 'database'.
Thuộc tính con bên trong 'database' ({ readonly user: string }) vẫn giữ nguyên kiểu cũ.
*/

// GIẢI PHÁP: DeepMutable (Duyệt đệ quy qua các tầng lồng nhau)
type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends object
    ? DeepMutable<T[P]>
    : T[P];
};

// Kiểm chứng với DeepMutable:
const fullyEditableConfig: DeepMutable<ImmutableConfig> = {
  host: "localhost",
  port: 3000,
  database: {
    user: "admin",
  },
};

fullyEditableConfig.port = 8080;          // ✅ Hợp lệ
fullyEditableConfig.database.user = "root"; // ✅ Hợp lệ ở cả tầng sâu

