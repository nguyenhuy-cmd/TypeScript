/*
Ngăn chặn việc gọi hàm thất lạc ngữ cảnh (Context Loss)
Xét hệ thống dispatch sự kiện với callback yêu cầu ngữ cảnh cụ thể:

Định nghĩa interface DatabaseSession:

Thuộc tính sessionId: string.

Phương thức save(data: string): void.

Định nghĩa type SessionAction = (this: DatabaseSession, data: string) => void.

Viết hàm runInSession(session: DatabaseSession, action: SessionAction, data: string): void thực thi action với ngữ cảnh session thông qua .call() hoặc 
.apply().

Tạo một hành vi độc lập logAndSave có typing this: DatabaseSession và chạy thử qua runInSession cũng như gọi trực tiếp logAndSave("data") để xem cách 
TypeScript bảo vệ ngữ cảnh.
*/
interface DatabaseSession{
    sessionId: string;
    save(data: string): void
}
type SessionAction = (this: DatabaseSession, data: string) => void;

function runInSession(session: DatabaseSession, action: SessionAction, data: string): void{
    action.call(session, data);
}

// Hàm yêu cầu rõ ràng phải được gọi với DatabaseSession
const logAndSave: SessionAction = function (this: DatabaseSession, data: string): void {
    console.log(`[Phiên: ${this.sessionId}] Đang lưu dữ liệu: ${data}`);
    this.save(data);
}

// khởi tạo session giả lập
const mySession: DatabaseSession = {
    sessionId: "01",
    save(data:string){
        console.log(`Đã commit: ${data}`)
    }
}
runInSession(mySession, logAndSave, "User Record #100");