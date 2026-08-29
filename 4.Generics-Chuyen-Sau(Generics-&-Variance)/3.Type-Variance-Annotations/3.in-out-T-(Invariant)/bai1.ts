/*
Khai báo in out T cho Mutable State Container
Xây dựng một hộp chứa trạng thái có thể đọc và ghi:

Định nghĩa interface StateCell<in out T>:

Thuộc tính value: T (mutable property).

Phương thức get(): T.

Phương thức set(newValue: T): void.

Cho hai class kế thừa:

TypeScript
class Shape {
  name: string = "Shape";
}

class Circle extends Shape {
  radius: number = 10;
}
Tạo một biến circleCell: StateCell<Circle>.

Thử thực hiện 2 phép gán sau và giải thích vì sao TypeScript chặn cả hai:

const shapeCell: StateCell<Shape> = circleCell;

const anotherCircleCell: StateCell<Circle> = new ShapeCell(); (giả sử có StateCell<Shape>).
*/
interface StateCell<in out T>{
    value: T;
    get(): T;
    set(newValue: T): void;
}

class Shape {
  name: string = "Shape";
}

class Circle extends Shape {
  radius: number = 10;
}

const circleCell: StateCell<Circle> = {
    value: new Circle(),

    get(){
        return this.value;
    },

    set(newValue){
        this.value = newValue;
    },
}

// Đúng
const shapeCell: StateCell<Circle> = circleCell;

// Giả sử có StateCell<Shape>
// ❌ Error
//const anotherCircleCell: StateCell<Circle> = shapeCell;