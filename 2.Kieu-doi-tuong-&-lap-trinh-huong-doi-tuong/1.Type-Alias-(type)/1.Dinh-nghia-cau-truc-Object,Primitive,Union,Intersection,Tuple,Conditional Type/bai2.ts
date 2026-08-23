/*
Union Types kết hợp Literal & Function Type Alias
Xây dựng hệ thống định tuyến (router) đơn giản:

Định nghĩa type HttpMethod = "GET" | "POST" | "PUT" | "DELETE".

Định nghĩa type RouteHandler = (req: { path: string; method: HttpMethod }) => void.

Định nghĩa type RouteConfig gồm:

path: chuỗi ký tự.

method: kiểu HttpMethod.

handler: kiểu RouteHandler.

Viết hàm registerRoute(config: RouteConfig): void in ra thông tin route đã đăng ký.
*/ 
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type RouteHandler = (req: { path: string; method: HttpMethod }) => void;
type RouteConfig = {
    path: string;
    method: HttpMethod;
    handler: RouteHandler;
}
function registerRoute(config: RouteConfig): void{
    console.log(
        `Router đã đăng kí:${config.method} ${config.path}`
    );
    config.handler({
        path: config.path,
        method: config.method
    })
    
}