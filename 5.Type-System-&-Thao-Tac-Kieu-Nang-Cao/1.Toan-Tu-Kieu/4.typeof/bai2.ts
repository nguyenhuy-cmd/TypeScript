/*
Bộ đôi keyof typeof với Enum/Lookup Object
Xét một bảng màu hoặc đối tượng ánh xạ trạng thái:

TypeScript
const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
Yêu cầu:

Tạo type StatusCodeName đại diện cho Union các tên trạng thái ("OK" | "BAD_REQUEST" | ...) bằng cách kết hợp keyof 
và typeof.

Tạo type StatusCodeValue đại diện cho Union các mã số trạng thái (200 | 400 | ...) bằng cú pháp Indexed Access 
typeof STATUS_CODES[keyof typeof STATUS_CODES].
*/
const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
type StatusCodeName = keyof typeof STATUS_CODES;
type StatusCodeValue = typeof STATUS_CODES[keyof typeof STATUS_CODES];