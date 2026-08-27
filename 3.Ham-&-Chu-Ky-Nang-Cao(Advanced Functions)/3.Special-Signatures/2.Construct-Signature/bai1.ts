/*
Factory Function nhận Constructor Signature

Định nghĩa interface Car có thuộc tính model: string và phương thức drive(): void.

Định nghĩa type CarConstructor bằng Construct Signature: nhận vào model: 
string và trả về instance kiểu Car.

Viết hàm carFactory(Ctor: CarConstructor, model: string): 
Car nhận vào Class constructor và trả về một instance mới qua từ khóa new.

Tạo class Sedan implements Car và kiểm thử với hàm carFactory.
*/
interface Car{
    model: string;
    drive(): void;
};

type CarConstructor = {
    new(model: string): Car;
}
function carFactory(Ctor: CarConstructor, model: string): Car{
    return new Ctor(model)
}

class Sedan implements Car{
    constructor(public model: string){}
    drive(): void {
        console.log(`${this.model} đang lái xe`);
    }
}

// kiểm thử
const car = carFactory(Sedan, "Toyota Camry")


console.log(car.model);
console.log(car.drive());

