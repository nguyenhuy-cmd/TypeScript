/*
Cạm bẫy "Weak Types" và Excess Checks
Một Weak Type là kiểu mà tất cả các thuộc tính của nó đều là optional (?).

TypeScript
interface RequestHeaders {
  authorization?: string;
  contentType?: string;
  userAgent?: string;
}
Cho đoạn mã sau:

TypeScript
const customHeaders = {
  auth: "Bearer token_123", // Gõ nhầm, không khớp bất kỳ thuộc tính nào của RequestHeaders
  timeout: 5000,
};

const headers: RequestHeaders = customHeaders;
Yêu cầu:

TypeScript sẽ phản ứng thế nào ở dòng gán const headers: RequestHeaders = customHeaders;?

Tại sao dù đã dùng biến trung gian customHeaders, TypeScript vẫn chặn thao tác gán này?
*/
interface RequestHeaders {
  authorization?: string;
  contentType?: string;
  userAgent?: string;
}
const customHeaders = {
  auth: "Bearer token_123", // Gõ nhầm, không khớp bất kỳ thuộc tính nào của RequestHeaders
  timeout: 5000,
};

//const headers: RequestHeaders = customHeaders;

// TypeScript sẽ báo lỗi
// vì các key là khác nhau, không có điểm chung