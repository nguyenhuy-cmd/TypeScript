/*
Generic Type Alias với Default Types
Thiết kế chuẩn hóa phản hồi từ Server (API Response Envelope):

Định nghĩa interface ApiResponse<T E="string" null,>:

status: "success" | "error".

data: kiểu T.

error: kiểu E | null.

timestamp: kiểu number.

Khởi tạo 3 biến kiểm thử:

Biến resDefault: Không truyền bất kỳ type argument nào, chứa data: null và error: "Unauthorized".

Biến resWithData: Chỉ truyền kiểu dữ liệu cho T là { id: number; name: string } và dùng E mặc định.

Biến resCustomError: Truyền kiểu T là boolean và E là { code: number; message: string }.
*/
interface ApiResponse<T = null, E = string>{
    status: "success" | "error";
    data: T;
    error: E | null;
    timestamp: number;
}
const resDefault: ApiResponse = {
    status: "error",
    data: null,
    error: "Uanauthorized",
    timestamp: Date.now()
}
const resWithData: ApiResponse<{ id: number; name: string }> = {
    status: "success",
    data: { id: 101, name: "TypeScript"},
    error: null,
    timestamp: Date.now()
}
const resCustomError: ApiResponse<
    boolean,
    { code: number; message: string }
> = {
    status: "error",
    data: false,
    error: { code: 404, message: "Resource Not Found" },
    timestamp: Date.now()


}
