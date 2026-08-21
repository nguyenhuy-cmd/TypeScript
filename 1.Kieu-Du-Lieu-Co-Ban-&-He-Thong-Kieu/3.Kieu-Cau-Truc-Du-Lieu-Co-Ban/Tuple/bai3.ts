/*
Variadic Tuples trong hàm xử lý Log & Tham số hàm
Sử dụng Variadic Tuple để xây dựng hàm ghi log có định dạng linh hoạt:

Định nghĩa kiểu LogEntry là một Tuple có phần tử đầu tiên luôn là level 
("INFO" | "WARN" | "ERROR"), phần tử thứ hai luôn là timestamp (Date), và theo
 sau là một danh sách không giới hạn các tin nhắn/dữ liệu kiểu string hoặc number.

Viết hàm formatLog(...entry: LogEntry): string nhận tham số dàn trải 
(rest parameters) thỏa mãn kiểu LogEntry và trả về chuỗi định dạng:
"[LEVEL] [ISO_DATE] message_1 message_2 ..."
*/
type LogEntry = [
    level: "INFO" | "WARN" | "ERROR",
    timestamp: Date,
    ...message: (string | number)[]
];

function formatLog(...entry: LogEntry): string {
    const [level, timestamp, ...message] = entry;
    const timeString = timestamp.toISOString();
    const content = message.join(" ");
    return `[${level}] [${timeString}] ${content}`;
}

// Kiểm thử
const logOutput = formatLog("INFO", new Date(), "User logged in with ID:", 1042);
console.log(logOutput);
