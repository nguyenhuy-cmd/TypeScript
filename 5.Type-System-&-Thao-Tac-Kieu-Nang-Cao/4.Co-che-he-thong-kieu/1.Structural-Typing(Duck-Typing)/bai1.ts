/*
Tính tương thích giữa Class và Interface độc lập
Xét hai class hoàn toàn tách biệt, không sử dụng từ khóa implements hay extends:

TypeScript
class Vector2D {
  constructor(public x: number, public y: number) {}
}

class Point2D {
  constructor(public x: number, public y: number) {}
}

interface Coordinate {
  x: number;
  y: number;
}
Viết hàm renderPoint(p: Coordinate): string trả về Point at (${p.x}, ${p.y}).

Thử truyền new Vector2D(10, 20) và new Point2D(5, 15) vào hàm renderPoint.

Dự đoán kết quả biên dịch và giải thích dựa trên cơ chế Structural Typing.
*/
class Vector2D {
  constructor(public x: number, public y: number) {}
}

class Point2D {
  constructor(public x: number, public y: number) {}
}

interface Coordinate {
  x: number;
  y: number;
}
function renderPoint(p: Coordinate): string{
    return `Point at (${p.x}, ${p.y})`;
};
console.log(renderPoint(new Vector2D(10, 20)));
console.log(renderPoint(new Point2D(5, 15)));


