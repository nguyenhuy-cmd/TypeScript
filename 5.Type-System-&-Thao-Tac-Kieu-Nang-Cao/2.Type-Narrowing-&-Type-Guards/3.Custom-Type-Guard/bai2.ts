/*
    Custom Type Guard cho kiểm tra kiểu dữ liệu unknown (Safe Parsing)
Khi nhận dữ liệu thô từ JSON.parse() hoặc request body từ client, dữ liệu có kiểu unknown.

Định nghĩa interface UserProfile:

TypeScript
interface UserProfile {
  id: number;
  email: string;
}
Viết hàm guard isUserProfile(value: unknown): value is UserProfile:

Kiểm tra value phải là một object hợp lệ (khác null, typeof === "object").

Kiểm tra id có tồn tại và mang kiểu number.

Kiểm tra email có tồn tại và mang kiểu string.

Thử truyền một biến kiểu unknown vào hàm, sau đó truy cập value.email bên trong khối lệnh if (isUserProfile(value)) để kiểm tra
*/
interface UserProfile {
  id: number;
  email: string;
}
function isUserProfile(value: unknown): value is UserProfile{
    return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof (value as { id: unknown }).id === "number" &&
    "email" in value &&
    typeof (value as { email: unknown }).email === "string"
  );
}

const apiPayload: unknown = JSON.parse('{"id": 404, "email": "dev@test.local"}');
if(isUserProfile(apiPayload)){
  // apiPayload được thu hẹp thành UserProfile an toàn
  console.log(`ID người dùng: ${apiPayload.id}, Email: ${apiPayload.email.toLowerCase()}`);
}else{
  console.log(`Định dạng hồ sơ người dùng không hợp lệ`);
}