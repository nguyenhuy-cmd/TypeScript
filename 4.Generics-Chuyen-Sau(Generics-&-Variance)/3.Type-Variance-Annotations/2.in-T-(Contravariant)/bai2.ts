/*
Tính tương thích gán kiểu Đối biến (Contravariant Assignment)
Cho cấu trúc phân cấp:

TypeScript
class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class SuperCar extends Vehicle {
  activateTurbo() {
    console.log("Turbo activated!");
  }
}
Cho interface Consumer:

TypeScript
interface Mechanic<in T> {
  service(vehicle: T): void;
}
Khởi tạo thợ bảo dưỡng cho mọi loại phương tiện:

TypeScript
const generalMechanic: Mechanic<Vehicle> = {
  service: (v) => v.startEngine(),
};
Thử thực hiện phép gán: const superCarMechanic: Mechanic<SuperCar> = generalMechanic;

Giải thích tại sao phép gán trên an toàn và hợp lệ trong TypeScript.
*/
class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class SuperCar extends Vehicle {
  activateTurbo() {
    console.log("Turbo activated!");
  }
}


interface Mechanic<in T> {
  service(vehicle: T): void;
}

const generalMechanic: Mechanic<Vehicle> = {
  service: (v) => v.startEngine(),
};
//1. Hợp lệ
const superCarMechanic: Mechanic<SuperCar> = generalMechanic; // Hợp lệ (Contravariance)

/*
Giải thích tính an toàn:

superCarMechanic nhận vào đối tượng SuperCar.

generalMechanic chỉ yêu cầu các thuộc tính có trên Vehicle.

Vì SuperCar là con của Vehicle, nó chứa đầy đủ các thuộc tính của Vehicle (như startEngine()). 

Do đó generalMechanic xử lý SuperCar hoàn toàn an toàn mà không sợ thiếu method.
*/