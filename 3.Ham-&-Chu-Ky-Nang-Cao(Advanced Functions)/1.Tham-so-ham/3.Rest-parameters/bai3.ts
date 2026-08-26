/*
Kết hợp Rest Parameter với Spread Arguments (as const)
Xét đoạn mã sau:

TypeScript
function routeHandler(method: "GET" | "POST", path: string, isProtected: boolean) {
  console.log(`[${method}] ${path} (Auth: ${isProtected})`);
}

function callRoute(...args: [method: "GET" | "POST", path: string, isProtected: boolean]) {
  routeHandler(...args);
}

// Lập trình viên chuẩn bị dữ liệu:
const routeConfig = ["GET", "/api/v1/users", true];
callRoute(...routeConfig); // TypeScript báo lỗi tại đây
Yêu cầu:

Giải thích lý do vì sao dòng callRoute(...routeConfig) bị báo lỗi compile-time.

Trình bày cách khắc phục bằng cách sử dụng Type Annotation hoặc toán tử as const.
*/
/*
1.Nguyên nhân: Khi khai báo const routeConfig = ["GET", "/api/v1/users", true], 
TypeScript tự động suy luận kiểu của biến này là (string | boolean)[] 
(mảng có độ dài tùy biến và chứa union types). 
Khi spread vào callRoute, compiler không thể đảm bảo mảng này có đúng 3 phần tử và đúng thứ tự kiểu
 "GET" | "POST", string, boolean.
*/

// Sửa:
function routeHandler(method: "GET" | "POST", path: string, isProtected: boolean) {
  console.log(`[${method}] ${path} (Auth: ${isProtected})`);
}

function callRoute(...args: [method: "GET" | "POST", path: string, isProtected: boolean]) {
  routeHandler(...args);
}

// Lập trình viên chuẩn bị dữ liệu:
const routeConfig = ["GET", "/api/v1/users", true] as const;
callRoute(...routeConfig); // TypeScript báo lỗi tại đây