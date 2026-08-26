/*
Nạp chồng hàm chuyển đổi kiểu dữ liệu cơ bản

Viết hàm makeDate để tạo đối tượng Date:

Trường hợp 1: Nhận vào duy nhất 1 tham số timestamp: number $\rightarrow$ trả về Date.

Trường hợp 2: Nhận vào 3 tham số year: number, month: number, day: number $\rightarrow$ trả về Date.

Yêu cầu:

Khai báo 2 overload signatures.

Viết implementation signature và hiện thực logic tạo Date phù hợp.

Thử gọi hàm với 2 tham số makeDate(2026, 8) và giải thích lỗi do TypeScript đưa ra.
*/
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

function makeDate(yearortimestamp: number, month?: number, day?: number): Date{
    if(month !== undefined && day !== undefined){
        return new Date(yearortimestamp, month - 1, day); 
    }
    return new Date(yearortimestamp); 
}

// kiểm tra
const d1 = makeDate(14e335245533);
const d2 = makeDate(2026, 8, 26);