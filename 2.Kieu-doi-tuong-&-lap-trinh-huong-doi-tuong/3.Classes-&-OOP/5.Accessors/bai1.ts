/*
Tính toán tự động và cơ chế Readonly ngầm định
Xây dựng class hình chữ nhật:

Tạo class Rectangle:

Thuộc tính public width: number.

Thuộc tính public height: number.

Khởi tạo nhận vào width và height.

Viết getter get area(): number trả về diện tích (width * height).

Khởi tạo đối tượng và thử gán rect.area = 100. Giải thích thông báo lỗi của TypeScript.
*/
class Rectangle{
    constructor(public width: number, public height: number){}
    get area(): number{
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect.area);
