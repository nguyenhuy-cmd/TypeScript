/*
Hạn chế của Static Members với Type Parameters
Xét đoạn mã sau:

TypeScript
class DataCache<T> {
  private cache: Map<string, T> = new Map();

  // 1. Instance method
  public set(key: string, value: T): void {
    this.cache.set(key, value);
  }

  // 2. Static member
  public static defaultCapacity: number = 100;
  public static defaultItem: T; // TypeScript báo lỗi tại đây
  public static clearGlobalCache<T>(): void { ... }
}
Yêu cầu:

Giải thích tại sao thuộc tính public static defaultItem: T bị báo lỗi biên dịch.

Giải thích tại sao phương thức clearGlobalCache<T>() lại hợp lệ khi đặt <T> riêng ở cấp độ method.
*/
/*
Nguyên nhân defaultItem: T lỗi:
T của class DataCache<T> là kiểu của instance, còn static thuộc về class, không thuộc về từng instance.

Lý do clearGlobalCache<T>() hợp lệ:
Vì clearGlobalCache<T>() có T riêng của chính phương thức, chứ không dùng T của class.
*/