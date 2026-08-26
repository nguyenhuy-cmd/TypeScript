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
interface PaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
}
function fetchPaginatedData(resource: string, {page = 1, limit = 20, sortBy = "id"}: PaginationOptions = {}): void{
    console.log(`Fetching: ${resource} | Page: ${page}, limit: ${limit}, sort: ${sortBy}`);    
}
// Kiểm thử các cách gọi
fetchPaginatedData("products"); 
// "Fetching products | Page: 1, Limit: 20, Sort: id"

fetchPaginatedData("orders", { limit: 50 }); 
// "Fetching orders | Page: 1, Limit: 50, Sort: id"

fetchPaginatedData("users", { page: 3, sortBy: "createdAt" }); 
// "Fetching users | Page: 3, Limit: 20, Sort: createdAt"