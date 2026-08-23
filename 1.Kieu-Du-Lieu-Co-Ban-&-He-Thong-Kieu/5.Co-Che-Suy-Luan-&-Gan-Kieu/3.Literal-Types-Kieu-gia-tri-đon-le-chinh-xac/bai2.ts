/*
Hiện tượng Type Widening và lỗi khi truyền tham số
Xét đoạn mã sau:

TypeScript
type HttpMethod = "GET" | "POST";

function sendRequest(url: string, method: HttpMethod) {
  console.log(`Sending ${method} request to ${url}`);
}

// Trường hợp 1: Dùng biến string thông thường
let reqMethod = "GET";
sendRequest("https://api.example.com", reqMethod); // TypeScript báo lỗi tại đây

// Trường hợp 2: Dùng object config
const config = {
  url: "https://api.example.com",
  method: "GET",
};
sendRequest(config.url, config.method); // TypeScript cũng báo lỗi tại đây
Yêu cầu:

Giải thích tại sao sendRequest ở cả 2 trường hợp trên đều bị báo lỗi biên dịch dù giá trị truyền vào thực tế là "GET".

Trình bày các cách sửa cho từng trường hợp để code hợp lệ (sử dụng Type Annotation, as const, hoặc const).
*/
/*
Nguyên nhân:

Ở Trường hợp 1, biến reqMethod được khai báo bằng let, nên compiler nới rộng kiểu (type widening) thành string. Một string tổng quát không thể gán cho kiểu hẹp hơn là "GET" | "POST".

Ở Trường hợp 2, thuộc tính config.method bên trong object mặc định được suy luận là string (vì thuộc tính object có thể bị gán lại giá trị).
*/
// Cách sửa
type HttpMethod = "GET" | "POST";

function sendRequest(url: string, method: HttpMethod) {
  console.log(`Sending ${method} request to ${url}`);
}
const reqMethod = "GET";
sendRequest("https://api.example.com", reqMethod);

const config = {
  url: "https://api.example.com",
  method: "GET",
} as const;
sendRequest(config.url, config.method);