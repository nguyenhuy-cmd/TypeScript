/*
Khai báo Tuple cơ bản và Labeled Tuple
Định nghĩa các kiểu dữ liệu Tuple sau:

Coordinate2D: Một tuple bất biến gồm 2 số thực đại diện cho tọa độ [x, y].

ApiResponse: Một Labeled Tuple gồm mã trạng thái statusCode (number), thông báo statusText (string) và dữ liệu payload (unknown).

Khởi tạo biến thực tế cho 2 kiểu trên.
*/
const Coordinate2D: readonly [number, number] = [30, 60];
const ApiResponse: [
    statusCode: number,
    statusText: string,
    payload: unknown] = [200, "Đã hợp lệ", "admin"];
