/*
Phục hồi kiểu sau các thao tác bất đồng bộ / Callback
Xét trường hợp TypeScript không thể theo dõi biến qua các phạm vi đóng (closure):

TypeScript
class TaskRunner {
  private activeWorker: string | null = null;

  initWorker(): void {
    this.activeWorker = "Worker_01";
  }

  runTask(): void {
    this.initWorker();

    // TypeScript vẫn coi this.activeWorker có thể là null
    // vì việc gọi hàm bên ngoài có thể thay đổi trạng thái instance
    const workerNameLength = this.activeWorker!.length;
    console.log(`Worker active with length: ${workerNameLength}`);
  }
}
Yêu cầu:

Giải thích tại sao TypeScript không tự động nhận biết this.activeWorker là string dù this.initWorker() vừa được gọi ngay dòng trước.

Viết lại hàm runTask theo cách an toàn tuyệt đối mà không cần dùng dấu !.
*/
// Vì ! chỉ là bảo cho typeScript là đây là chgawcs chắn không phải là null thôi nhưng thực chất vẫn có thể là null

class TaskRunner {
  private activeWorker: string | null = null;

  initWorker(): void {
    this.activeWorker = "Worker_01";
  }

  runTask(): void {
    this.initWorker();

    const worker = this.activeWorker;

    if (worker === null) {
      throw new Error("Worker chưa được khởi tạo.");
    }
    const workerNameLength = worker.length;
    
    console.log(`Worker active with length: ${workerNameLength}`);
  }
}
