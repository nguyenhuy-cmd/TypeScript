/*
Discriminated Union với switch (x.kind)Thiết kế hệ thống tính diện tích các hình học:Định nghĩa 3 kiểu hình học:
TypeScripttype Circle = {
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
Viết hàm calculateArea(shape: Shape): number sử dụng switch (shape.kind):
Nhánh "circle": Trả về $\pi \times r^2$ (Math.PI * shape.radius ** 2).
Nhánh "rectangle": Trả về $width \times height$.
Nhánh "square": Trả về $size \times size$.
*/
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

function calculateArea(shape: Shape): number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "rectangle":
            return shape.width * shape.height;
        case "square":
            return shape.size * shape.size;
    }
}
console.log(calculateArea({ kind: "circle", radius: 5 }));       // ~78.54
console.log(calculateArea({ kind: "rectangle", width: 4, height: 6 })); // 24
console.log(calculateArea({ kind: "square", size: 3 }));          // 9