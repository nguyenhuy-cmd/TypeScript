/*
Xử lý thuộc tính Optional an toàn (Narrowing & Default Value)
Xây dựng hệ thống gửi thư điện tử:

Định nghĩa interface EmailPayload gồm:

to: chuỗi ký tự (người nhận).

subject: chuỗi ký tự (tiêu đề).

body: chuỗi ký tự (nội dung).

cc: mảng chuỗi tùy chọn (?).

isHtml: boolean tùy chọn (?).

Viết hàm sendEmail(payload: EmailPayload): void:

Nếu isHtml không được truyền vào, mặc định gán là false.

Nếu cc tồn tại và có phần tử, in danh sách người nhận CC nối bằng dấu phẩy; nếu không có, in "No CC".

Tránh hoàn toàn việc truy cập thuộc tính undefined bằng cách kiểm tra điều kiện phù hợp.
*/
interface EmailPayload{
    to: string;
    subject: string;
    body: string;
    cc?: string[];
    isHtml?: boolean;
}
function sendEmail(payload: EmailPayload): void{
    // Xử lí giá trị mặc định cho optional property
    const isHtml = payload.isHtml ?? false;

    // Xử lí an toàn mảng optional 
    const ccRecipients = 
    payload.cc && payload.cc.length > 0
      ? payload.cc.join(", ")
      : "No CC";

    console.log(`Sending email to: ${payload.to}`);
    console.log(`Subject: ${payload.subject}`);
    console.log(`Format: ${isHtml ? "HTML" : "Plain Text"}`);
    console.log(`CC: ${ccRecipients}`);
}
sendEmail({
  to: "client@example.com",
  subject: "Monthly Statement",
  body: "Here is your statement...",
});