/*
Nhận biết các thao tác bị cấm với const enum
Xét đoạn mã sau:

TypeScript
const enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

// Thao tác 1
const reqMethod = HttpMethod.GET;

// Thao tác 2
const methods = Object.values(HttpMethod);

// Thao tác 3
function handleRequest(method: string) {
  return HttpMethod[method as keyof typeof HttpMethod];
}
Yêu cầu: Chỉ ra các thao tác gây lỗi biên dịch và giải thích lý do dựa trên cơ chế inlining của const enum.
*/
/*
 ĐÁp án:
Thao tác 1: Hợp lệ. Trình biên dịch thay thế thành const reqMethod = "GET";.

Thao tác 2 & 3: Báo lỗi compile-time: 
'const' enums can only be used in property or index access expressions 
or the right hand side of an import declaration or export assignment or type query.

Giải thích: Cả Object.values(HttpMethod) và việc tra cứu động 
HttpMethod[method] đều yêu cầu phải có một Object HttpMethod thực tế tồn tại
trong bộ nhớ runtime. 
Do const enum không sinh ra object nào, các thao tác này không thể thực thi.
*/