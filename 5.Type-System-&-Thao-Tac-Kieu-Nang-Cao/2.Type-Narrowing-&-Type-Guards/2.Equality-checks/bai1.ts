/*
Thu hẹp kiểu với so sánh bằng (===, !==)

Xử lý các giá trị tùy chọn hoặc có thể rỗng:

Định nghĩa hàm processCoordinate(x: number | null, y: number | undefined): string.

Yêu cầu:
Dùng phép so sánh !== null và !== undefined để thu hẹp kiểu.

Khi cả hai đều đã được xác nhận là number, tính khoảng cách Euclid từ gốc tọa độ 
$(0, 0)$ đến $(x, y)$ theo công thức $\sqrt{x^2 + y^2}$ (dùng Math.hypot(x, y)).

Nếu một trong hai giá trị bị thiếu, trả về "Missing coordinate".
*/
function processCoordinate(x: number | null, y: number | undefined): string{
    if(x !== null && y !== undefined){
        const distance = Math.hypot(x,y);
        return `Khoảng cách: ${distance.toFixed(2)}`;}
    return `Missing coordinate`;
    }

processCoordinate(3, 4);
