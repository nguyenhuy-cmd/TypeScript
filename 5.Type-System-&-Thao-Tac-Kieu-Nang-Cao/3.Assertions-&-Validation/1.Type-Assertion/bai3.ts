/*
Xử lý dữ liệu trả về từ External JSON/API
Khi đọc dữ liệu từ localStorage hoặc JSON.parse(), kiểu nhận về mặc định thường là string | null hoặc any:

Định nghĩa interface:

TypeScript
interface AppSession {
  token: string;
  userId: number;
  roles: string[];
}
Viết hàm loadSessionFromStorage(storageKey: string): AppSession | null:

Lấy chuỗi raw từ localStorage.getItem(storageKey).

Nếu không có chuỗi, trả về null.

Nếu có, parse bằng JSON.parse(...) và dùng as AppSession để trả về kiểu dữ liệu hoàn chỉnh.

Nhận xét về rủi ro của cách làm này so với việc dùng Custom Type Guard (isAppSession).
*/
interface AppSession {
  token: string;
  userId: number;
  roles: string[];
}
function loadSessionFromStorage(storageKey: string): AppSession | null{
    const rawData = localStorage.getItem(storageKey);
    if(!rawData){
        return null;
    }
    // Ép kiểu từ kết quả parse (any) sang AppSession
     return JSON.parse(rawData) as AppSession;
}

/*
Nhận xét rủi ro:

as AppSession chỉ là lời cam kết của lập trình viên với compiler, hoàn toàn không kiểm tra dữ liệu thực tế.

Nếu dữ liệu lưu trong localStorage bị hỏng hoặc thiếu trường (ví dụ { token: "abc" } nhưng thiếu roles), 
khi gọi session.roles.map(...), chương trình sẽ bắn lỗi Cannot read properties of undefined (reading 'map').

Dùng Custom Type Guard (isAppSession(data: unknown): data is AppSession) an toàn hơn nhiều vì 
nó thực sự duyệt qua từng trường ở runtime trước khi cho phép mã nguồn truy cập.
*/
