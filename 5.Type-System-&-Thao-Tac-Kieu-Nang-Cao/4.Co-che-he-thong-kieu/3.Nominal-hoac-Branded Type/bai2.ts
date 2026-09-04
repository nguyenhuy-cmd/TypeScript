/*
Xác thực dữ liệu đầu vào (Validation Brand Pattern)
Xây dựng kiểu dữ liệu đảm bảo một chuỗi email đã được kiểm tra tính hợp lệ trước khi gửi:

Cho kiểu:

TypeScript
type ValidEmail = Brand<string, "ValidEmail">;
Viết hàm type guard hoặc parser parseEmail(raw: string): ValidEmail:

Nếu chuỗi raw chứa ký tự "@", ép kiểu và trả về ValidEmail.

Nếu không, ném ra lỗi new Error("Invalid email format").

Viết hàm sendVerificationEmail(to: ValidEmail): void.

Chứng minh rằng không thể truyền một chuỗi string thông thường 
(ví dụ "john@example.com") trực tiếp vào hàm sendVerificationEmail nếu chưa qua hàm parseEmail.
*/
declare const brand: unique symbol;
type Brand<T, B> = T & { readonly [brand]: B };
type ValidEmail = Brand<string, "ValidEmail">;
function parseEmail(raw: string): ValidEmail{
    if(!raw.includes("@")){
        throw new Error(`Định dạng email không hợp lệ`)
    }
    return raw as ValidEmail;
}
function sendVerificationEmail(to: ValidEmail):  void{
    console.log(`Đang gửi email đến: ${to}`);
}
const rawInput = "huy@gmail.com";

// sendVerificationEmail(rawInput);
// Lỗi compile-time: Đối số thuộc kiểu 'string' không thể gán cho tham số thuộc kiểu 'ValidEmail'.

// Phải đi qua xác thực mới có kiểu ValidEmail:
const validEmail = parseEmail(rawInput);
sendVerificationEmail(validEmail); // Hợp lệ