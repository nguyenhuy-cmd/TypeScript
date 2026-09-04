/*
Phân biệt Gán trực tiếp (Object Literal) vs Gán qua Biến trung gian
Cho interface yêu cầu thông tin xác thực cơ bản:

TypeScript
interface AuthUser {
  id: string;
  email: string;
}

function authenticate(user: AuthUser): void {
  console.log(`Authenticating: ${user.email}`);
}
Thử nghiệm hai cách gọi hàm sau:

TypeScript
// Cách 1: Gán trực tiếp
authenticate({
  id: "usr_1",
  email: "test@dev.to",
  role: "admin", // Thuộc tính dư thừa
});

// Cách 2: Gán qua biến trung gian
const userWithRole = {
  id: "usr_1",
  email: "test@dev.to",
  role: "admin",
};
authenticate(userWithRole);
Yêu cầu:

Cho biết cách nào sẽ gây ra lỗi biên dịch. Nêu lý do TypeScript áp dụng cơ chế kiểm tra khác nhau ở hai trường hợp này.

Tại sao cơ chế ở Cách 2 lại an toàn về mặt cấu trúc?
*/
interface AuthUser {
  id: string;
  email: string;
}

function authenticate(user: AuthUser): void {
  console.log(`Authenticating: ${user.email}`);
}
/*1.
Kết quả:

Cách 1 bị lỗi biên dịch: TypeScript kích hoạt Excess Property Checks khi gặp object literal 
trực tiếp. Compiler giả định bạn đã gõ nhầm hoặc đưa vào một thuộc tính vô ích không thể truy cập 
qua kiểu AuthUser.

Cách 2 hợp lệ: Gán qua biến trung gian chỉ tuân theo quy tắc subtyping thông thường.
*/

/*2.
Lý do Cách 2 an toàn: 
Đối tượng userWithRole sở hữu đầy đủ mọi thứ mà AuthUser đòi hỏi (id và email). 
Việc nó chứa thêm role không làm hỏng bất kỳ logic nào bên trong hàm authenticate, 
vì hàm này chỉ tương tác với các thuộc tính được định nghĩa trong AuthUser.
 */