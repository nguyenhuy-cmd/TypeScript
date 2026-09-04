/*
Kết hợp satisfies với as const
Xét việc xây dựng danh sách route điều hướng với method chuẩn:

Định nghĩa kiểu route tổng quát:

TypeScript
type RouteDefinition = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};
type RouteMap = Record<string, RouteDefinition>;
Viết cấu hình endpoints khai báo với as const satisfies RouteMap:

getUser: path "/users", method "GET".

createUser: path "/users", method "POST".

Kiểm tra:

TypeScript có bắt lỗi nếu đặt method "FETCH" không?

Kiểu suy luận của endpoints.getUser.method là kiểu gì (string, "GET" | "POST"..., hay "GET")?
*/
type RouteDefinition = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};
type RouteMap = Record<string, RouteDefinition>;

const endpoints = {
    getUser: {
        path: "/user", method: "GET"
    },
    createUser: {
        path: "/user", method: "POST"
    }
} as const satisfies RouteMap;
//1. Nếu cho PATCH sẽ báo lỗi
//2. Kiểu suy luận sẽ là "GET"