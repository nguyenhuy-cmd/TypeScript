/*
Phụ thuộc kiểu trả về vào kiểu tham số đầu vào

Xét tình huống chuẩn hóa chuỗi hoặc mảng chuỗi:

Nếu truyền vào một chuỗi string $\rightarrow$ trả về một string viết hoa.

Nếu truyền vào một mảng string[] $\rightarrow$ trả về một string[] với các phần tử viết hoa.

Yêu cầu:
Viết chữ ký nạp chồng và thân hàm toUpperCase(input: string | string[]).

Kiểm tra kiểu trả về: Đảm bảo khi truyền biến chuỗi thì kết quả có kiểu là string 
(gọi được .trim()), truyền mảng thì kết quả là string[] 
(gọi được .map()) mà không cần ép kiểu (as).
*/
function toUpperCase(input: string):string;
function toUpperCase(input: string[]):string[];

function toUpperCase(input: string | string[]): string | string[]{
    if(Array.isArray(input)){
        return input.map((str) => str.toUpperCase())
    }

    return input.toUpperCase();
}
const single = toUpperCase("hello");      // Kiểu: string
console.log(single.toLowerCase());        // Hợp lệ


const multiple = toUpperCase(["a", "b"]); // Kiểu: string[]
console.log(multiple.join(", "));         // Hợp lệ