/*
Khai thác tính năng Reverse Mapping (Ánh xạ ngược)
Xây dựng hàm chuyển đổi mã lỗi HTTP thành thông báo dễ đọc:

Định nghĩa enum ResponseCode { SUCCESS = 200, NOT_FOUND = 404, SERVER_ERROR = 500 }.

Viết hàm getStatusName(code: ResponseCode): string sử dụng cú pháp ánh xạ ngược để trả về tên của mã lỗi (ví dụ truyền vào 404 sẽ trả về "NOT_FOUND").

Giải thích cách TypeScript lưu đối tượng ResponseCode trong JavaScript thuần ở runtime.
*/
enum ResponseCode { 
    SUCCESS = 200, 
    NOT_FOUND = 404, 
    SERVER_ERROR = 500 
};
function getStatusName(code: ResponseCode): string{
     return ResponseCode[code]
}
console.log(getStatusName( ResponseCode.SUCCESS));
console.log(getStatusName( ResponseCode.NOT_FOUND));
console.log(getStatusName( ResponseCode.SERVER_ERROR));
