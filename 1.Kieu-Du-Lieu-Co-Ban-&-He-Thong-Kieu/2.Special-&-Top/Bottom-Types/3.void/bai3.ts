/*
Định nghĩa Event Listener Pattern với kiểu void
Xây dựng một hệ thống lắng nghe sự kiện đơn giản:

Định nghĩa type VoidCallback = (data: string) => void.

Viết class EventEmitter gồm:

Thuộc tính listeners: mảng chứa các hàm callback kiểu VoidCallback.

Phương thức on(listener: VoidCallback): void để thêm callback vào danh sách.

Phương thức emit(data: string): void để gọi toàn bộ các callback đã đăng ký với tham số data.
*/
type VoidCallback = (data: string) => void
class EventEmitter {
    listeners: VoidCallback[] = [];

    on(listener: VoidCallback): void {
        this.listeners.push(listener)
    }
    emit(data: string): void {
        this.listeners.forEach((listener) => listener(data))
    }
}

const emitter = new EventEmitter();
emitter.on((msg) => console.log("Received:", msg));
emitter.on((msg) => msg.toUpperCase()); // Hợp lệ, giá trị trả về bị bỏ qua

emitter.emit("Hello Void");