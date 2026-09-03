/*
Assertion Function kiểm tra cấu trúc Object từ unknown
Khi làm việc với phản hồi API bên thứ ba, bạn cần chặn lỗi sớm trước khi xử lý:

Cho interface:

TypeScript
interface AuthTokenPayload {
  userId: string;
  exp: number;
}
Viết hàm assertIsTokenPayload(data: unknown): asserts data is AuthTokenPayload:

Ném lỗi nếu data không phải object, là null, thiếu userId (không phải string) hoặc thiếu exp (không phải number).

Thử gọi hàm với biến payload: unknown, sau đó truy cập trực tiếp payload.userId và payload.exp.
*/
interface AuthTokenPayload {
  userId: string;
  exp: number;
}
function assertIsTokenPayload(data: unknown): asserts data is AuthTokenPayload{
    if(typeof data !== "object" ||  data === null || typeof (data as any).userId !== "string" ||
    typeof(data as any).exp !== "number"){
        throw new Error(`dữ liệu không hợp lệ`)
    }
}
const payLoad: unknown = {
    userId: "USER_001",
    exp: 1234567890
}
assertIsTokenPayload(payLoad);
console.log(payLoad.userId);
console.log(payLoad.exp);