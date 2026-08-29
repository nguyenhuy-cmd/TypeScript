/*
Xây dựng Event Bus hai chiều (Pub/Sub) chuẩn Invariant
Thiết kế kênh truyền thông điệp hai chiều (Channel):

Định nghĩa interface MessageChannel<in out T>:

Phương thức publish(message: T): void.

Phương thức subscribe(handler: (message: T) => void): void.

Viết class InMemoryChannel<in out T> implements MessageChannel<T>:

Quản lý danh sách các subscriber handlers: ((message: T) => void)[].

Hiện thực publish và subscribe.

Kiểm thử với một hệ thống thông báo người dùng:

TypeScript
interface BaseNotification {
  id: string;
}
interface PushNotification extends BaseNotification {
  deviceToken: string;
}
Chứng minh rằng không thể truyền nhầm một MessageChannel<BaseNotification> vào hàm chỉ chấp nhận MessageChannel<PushNotification>.
*/
