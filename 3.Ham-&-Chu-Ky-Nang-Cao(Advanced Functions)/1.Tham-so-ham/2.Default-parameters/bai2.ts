/*
Default Parameter đứng trước tham số bắt buộc

Viết hàm createRequest(method: "GET" | "POST" = "GET", endpoint: string, timeout: number = 5000): string.

Yêu cầu:

Trả về chuỗi: "[<method>] <endpoint> (Timeout: <timeout>ms)".

Viết các câu lệnh gọi hàm để:

Tạo request tới endpoint "/users" với method mặc định và timeout mặc định.

Tạo request tới endpoint "/login" với method là "POST" và timeout mặc định.

Tạo request tới endpoint "/metrics" với method mặc định và timeout là 10000.
*/
function createRequest(method: "GET" | "POST" = "GET", endpoint: string, timeout: number = 5000): string{
    return `[${method}] ${endpoint} (Timeout: ${timeout}ms)`;
}
//1. Method mặc định, timeout mặc định (bắt buộc truyền undefined cho vị trí đầu tiên)
console.log(createRequest(undefined, "user", undefined));

console.log(createRequest("POST", "/login", undefined));

console.log(createRequest(undefined, "/metrics", 10000));


