/*
Soft Private (private) vs Hard Private (#field)
Xét class xử lý mã token:

TypeScript
class SoftTokenHolder {
  private secretKey: string;
  constructor(key: string) {
    this.secretKey = key;
  }
}

class HardTokenHolder {
  #secretKey: string;
  constructor(key: string) {
    this.#secretKey = key;
  }
}

const softObj = new SoftTokenHolder("soft_secret_123");
const hardObj = new HardTokenHolder("hard_secret_456");

// Bypass kiểm tra kiểu:
console.log((softObj as any).secretKey);
console.log((hardObj as any)["#secretKey"]);
Yêu cầu:

Kết quả in ra màn hình ở 2 dòng console.log trên là gì?

Giải thích sự khác biệt cốt lõi về cơ chế bảo mật giữa private của TypeScript và #field của ECMAScript.
*/
/*
Kết quả:

(softObj as any).secretKey in ra: "soft_secret_123" (lọt dữ liệu).

(hardObj as any)["#secretKey"] in ra: undefined (hoặc ném lỗi SyntaxError nếu cố tình gọi hardObj.#secretKey).

Giải thích:

private của TS chỉ là lớp vỏ kiểm tra tại compile-time, khi build ra JS nó trở thành property bình thường trên object.

#field là tính năng native của JavaScript runtime, engine V8/JS sử dụng Private Identifier Scope đặc biệt để khóa trường này, 
không thể bị truy cập qua reflection, Object.keys(), hay ép kiểu.
*/