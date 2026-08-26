/*
Phân biệt Instance vs Static & Khai báo Hằng số Class
Tạo class tiện ích toán học MathUtils:

Khai báo thuộc tính static bất biến PI có giá trị 3.14159.

Khai báo phương thức static calculateCircleArea(radius: number): number sử dụng MathUtils.PI.

Khai báo phương thức static sum(...numbers: number[]): number trả về tổng của dãy số.

Yêu cầu:

Viết code hoàn chỉnh cho class MathUtils.

Khởi tạo một biến const m = new MathUtils(); và thử gọi m.PI hoặc m.calculateCircleArea(5). Giải thích lỗi biên dịch của TypeScript.
*/
class MathUtils {
    static readonly PI: number = 3.14159;
    static calculateCircleArea(radius: number): number{
        return MathUtils.PI * radius ** 2;
    }
    static sum(...numbers: number[]): number{
        return numbers.reduce((total, number) => total + number, 0)
    }
}
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircleArea(5));
console.log(MathUtils.sum(1,2,3,4,5));




