/*
Tính tương thích gán giá trị (Covariance Assignment)
Cho hệ thống phân cấp động vật:

TypeScript
class Animal {
  name: string = "Animal";
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
Cho interface:

TypeScript
interface Producer<out T> {
  produce(): T;
}
Khởi tạo một đối tượng:

TypeScript
const dogProducer: Producer<Dog> = {
  produce: () => new Dog(),
};
Thử gán: const animalProducer: Producer<Animal> = dogProducer;

Dự đoán câu lệnh gán trên có hợp lệ không và giải thích tính an toàn kiểu tại runtime.
*/
// Hợp lệ 
/*
Giải thích tính an toàn:

Bên nhận (animalProducer) chỉ kỳ vọng nhận được bất kỳ đối tượng nào là Animal (có thuộc tính name).

dogProducer luôn sản sinh ra Dog. Vì Dog kế thừa từ Animal nên chắc chắn sở hữu đầy đủ mọi thuộc tính của Animal.

Không có thao tác ghi dữ liệu nào vào dogProducer, do đó không thể xảy ra hiện tượng đưa một con vật khác (như Cat) vào làm hỏng trạng 
thái nội bộ.
*/
