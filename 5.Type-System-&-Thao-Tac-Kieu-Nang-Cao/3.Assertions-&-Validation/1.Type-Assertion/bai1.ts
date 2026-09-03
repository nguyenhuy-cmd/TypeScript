/*
Type Assertion trên DOM API
Lấy phần tử từ DOM trong môi trường trình duyệt:

Xét đoạn mã:

TypeScript
const emailInput = document.getElementById("email-field");
Yêu cầu:

Cho biết kiểu mặc định mà hàm document.getElementById trả về.

Dùng cú pháp as để ép kiểu emailInput về HTMLInputElement.

Sau khi ép kiểu, gán giá trị emailInput.value = "test@example.com".

Giải thích điều gì xảy ra ở runtime nếu ID "email-field" thực tế là một thẻ <div>.
*/
// 1.document.getElementById mặc định trả về: HTMLElement | null
const rawElement = document.getElementById("email-field");

//2 & 3. Ép kiểu an toàn hơn về HTMLInputElement
const emailInput = document.getElementById("email-field") as HTMLInputElement;

// Hợp lệ về kiểu: HTMLInputElement có thuộc tính .value
emailInput.value = "huy@gmail.com";

// 4. Rủi ro runtime:
// Nếu thẻ đó là <div>, TypeScript vẫn cho phép compile, nhưng ở runtime <div> không có property .value
// Kết quả là gán thuộc tính tùy biến vào thẻ div vô hại hoặc gây undefined nếu đọc ra,
// hoặc sập ứng dụng nếu gọi phương thức đặc thù như emailInput.select().

