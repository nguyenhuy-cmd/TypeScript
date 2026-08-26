/*
Khống chế danh sách tham số bằng Tuple Types (Tuple Rest Parameters)
Trong các hàm định dạng hoặc logging, ta muốn kiểm soát chính xác cấu trúc của 
các tham số phía sau:

Viết hàm logEvent(eventName: string, ...details: [userId: string, level: "INFO" | "WARN" | "ERROR", timestamp?: Date]): void.

Yêu cầu:

Trả về/in ra chuỗi theo định dạng: 
"[<level>] <eventName> - User: <userId> - Time: <timestamp>" (nếu không có timestamp thì lấy new Date()).

Kiểm tra các trường hợp gọi hàm hợp lệ và không hợp lệ (ví dụ: thiếu level, sai kiểu của userId).
*/
function logEvent(eventName: string, ...details: [userId: string, level: "INFO" | "WARN" | "ERROR", timestamp?: Date]): void{
    const [userId, level, timestamp = new Date()] = details;

    console.log(`[${level}] ${eventName} - User: ${userId} - Time: ${timestamp.toISOString()}`);
}
// Hợp lệ:
logEvent("LOGIN", "USR_001", "INFO");
logEvent("PAYMENT_FAILED", "USR_002", "ERROR", new Date("2026-08-26"));

// Lỗi biên dịch:
// logEvent("LOGOUT", "USR_003"); 
// Lỗi: Source has 1 element(s) but target requires 2. (Thiếu tham số `level`)

// logEvent("ACTION", "USR_004", "DEBUG"); 
// Lỗi: Type '"DEBUG"' is not assignable to type '"INFO" | "WARN" | "ERROR"'.
