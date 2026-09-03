/*
Tạo Union Types từ Const Assertion Array
Kỹ thuật thay thế Enum bằng mảng hằng số kết hợp as const:

Cho mảng:

TypeScript
const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE"] as const;
Yêu cầu:

Cho biết kiểu suy luận của biến HTTP_METHODS.

Dùng Indexed Access kết hợp typeof để tạo type HttpMethod đại diện cho Union "GET" | "POST" | "PUT" | "DELETE".

Viết hàm sendRequest(url: string, method: HttpMethod): void và thử gọi với "GET" cùng "PATCH".
*/
const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE"] as const;
// 1.kiểu suy luận của biến HTTP_METHODS là:readonly ["GET", "POST", "PUT", "DELETE"]
// 2
type HttpMethod = (typeof HTTP_METHODS)[number]
function sendRequest(url: string, method: HttpMethod): void{
    console.log(`Đang gửi yêu cầu ${method} tới ${url}`);
}
sendRequest("/api/users", "GET"); // Hợp lệ