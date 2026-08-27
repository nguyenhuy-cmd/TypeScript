/*
Định nghĩa Call Signature cơ bản & Hàm có thuộc tính (Hybrid Type)
Xây dựng một bộ đếm có khả năng vừa gọi như hàm vừa chứa trạng thái:

Định nghĩa interface Counter:

Call Signature: Nhận không tham số và trả về number.

Thuộc tính count: number.

Phương thức reset(): void.

Viết hàm createCounter(): Counter trả về một đối tượng thỏa mãn interface trên.
*/
interface Counter{(): number
    count: number;
    reset(): void 
}
function createCounter(): Counter{
    const counter = (() => {
        counter.count++;
        return counter.count;
    }) as Counter;
    
    counter.count = 0;

    counter.reset = () => {
        counter.count = 0;
    };

    return counter;
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

console.log(counter.count); // 3

counter.reset();

console.log(counter.count); // 0

