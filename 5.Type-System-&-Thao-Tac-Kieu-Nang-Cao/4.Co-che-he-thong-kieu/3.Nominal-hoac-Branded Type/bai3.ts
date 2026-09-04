/*
Đảm bảo an toàn đơn vị đo lường (Dimension Safety)

Trong tính toán vật lý, nhầm lẫn giữa mét ($m$) và milimét ($mm$) sẽ làm hỏng kết quả:

Định nghĩa hai kiểu branded: Meters và Millimeters từ kiểu gốc number.

Viết hàm đổi đơn vị toMillimeters(m: Meters): Millimeters.

Viết hàm tính chu vi hình chữ nhật calcPerimeter(w: Meters, h: Meters): Meters.

Kiểm tra việc cộng trực tiếp Meters với Millimeters xem có được phép không, và giải thích tại sao. 
*/
// Định nghĩa nhãn ảo bằng unique symbol để tránh đụng độ

declare const  brand: unique symbol;
type Brand<T, B> = T & {readonly [brand]: B };

// Định nghĩa 2 kiểu Branded từ kiểu gốc number
type Meters = Brand<number, "Meters">;
type Millimeter = Brand<number, "Millimeter">;

function toMillimeters(m: Meters): Millimeter{
    return (m * 1000) as Millimeter
}

function calcPerimeter(w: Meters, h: Meters): Meters{
    return ((w + h) * 2) as Meters;
}

function makeMeters(n: number):Meters{
    return n as Meters;
}

function makeMillimeter(n: number): Millimeter{
    return n as Millimeter;
}

const width = makeMeters(5);

const offset = makeMillimeter(1000);

// Thực hiện cộng trực tiếp
const sum = width + offset;  // vẫn chạy đc, kiểu dữ liệu là number

