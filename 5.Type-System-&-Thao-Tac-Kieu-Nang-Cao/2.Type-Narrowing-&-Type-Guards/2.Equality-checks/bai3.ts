/*
Exhaustive Type Checking với never
Kế thừa bài 2, xét trường hợp sau này hệ thống mở rộng thêm hình tam giác:

TypeScript
type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type ExtendedShape = Shape | Triangle;
Viết hàm kiểm tra triệt để assertNever(value: never): never: Ném ra lỗi new Error(...).

Cập nhật hàm calculateArea(shape: ExtendedShape): number với nhánh default: return assertNever(shape);.

Giả sử bạn cố tình chưa viết case "triangle", hãy quan sát lỗi compile-time mà TypeScript đưa ra tại nhánh default.
*/
export {}; 
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Square = {
  kind: "square";
  size: number;
};

type Shape = Circle | Rectangle | Square;
type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};
function assertNever(value: never): never{
    throw new Error(`Trường hợp discriminated union chưa được xử lý: ${JSON.stringify(value)}`)
}
type ExtendedShape = Shape | Triangle;

function calculateArea(shape: ExtendedShape): number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "rectangle":
            return shape.width * shape.height;
        case "square":
            return shape.size * shape.size;
        default: 
        return  assertNever(shape);
    }
}
