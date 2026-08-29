/*
Khai báo in T và Kiểm tra vị trí Input
Xét hai interface sau:

TypeScript
// Interface 1
interface Consumer<in T> {
  consume(item: T): void;
}

// Interface 2
interface ProducerConsumer<in T> {
  process(item: T): T; // TypeScript sẽ báo lỗi tại đây
}
Yêu cầu:

Giải thích lý do vì sao ProducerConsumer<in T> bị TypeScript báo lỗi biên dịch.

Nêu cách sửa để interface vừa nhận T làm đầu vào, vừa trả về T làm đầu ra.
*/
// 1. Nó có trả về T, chính việc trả về T mới gây lỗi.
//2. Sửa:
// Interface 1
interface Consumer<in T> {
  consume(item: T): void;
}

// Interface 2
interface ProducerConsumer<T> {
  process(item: T): T; // TypeScript sẽ báo lỗi tại đây
}