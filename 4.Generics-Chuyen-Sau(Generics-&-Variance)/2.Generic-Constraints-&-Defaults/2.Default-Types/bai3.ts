/*
Generic Class với nhiều Type Parameters và Giá trị mặc định
Xây dựng một hàng đợi ưu tiên có thể cấu hình kiểu dữ liệu lưu trữ và kiểu payload:

Định nghĩa class PriorityQueue<T, P="number">:

Thuộc tính private elements: Array<{ item: T; priority: P }> = [].

Phương thức enqueue(item: T, priority: P): void: Thêm phần tử vào danh sách.

Phương thức dequeue(): T | undefined: Lấy ra phần tử đầu tiên trong mảng và trả về item (hoặc undefined nếu mảng rỗng).

Phương thức peek(): { item: T; priority: P } | undefined: Xem phần tử đầu tiên.

Kiểm thử:

Khởi tạo queue1 = new PriorityQueue<string>() (độ ưu tiên mặc định kiểu number).

Khởi tạo queue2 = new PriorityQueue<string, "HIGH" | "LOW">() (độ ưu tiên dùng Literal Union).
*/
class PriorityQueue<T, P="number">{
    private elements: Array<{ item: T; priority: P }> = [];
    enqueue(item: T, priority: P): void{
        this.elements.push({
            item: item,
            priority: priority
        });
    }

    dequeue(): T | undefined{
        const element = this.elements.shift();

        return element?.item;
    }

    peek(): { item: T; priority: P } | undefined{
        return this.elements[0];
    }
}

const queue1 = new PriorityQueue<string>();

const queue2 = new PriorityQueue<string, "HIGH" | "LOW">();


queue2.enqueue("Task A", "HIGH"); // ✅
queue2.enqueue("Task B", "LOW");  // ✅