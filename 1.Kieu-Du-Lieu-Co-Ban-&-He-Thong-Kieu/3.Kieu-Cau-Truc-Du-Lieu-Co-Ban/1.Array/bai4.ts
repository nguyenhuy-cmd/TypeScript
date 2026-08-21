/*
Tính tương thích gán giá trị (Assignability)
Xét đoạn mã sau:

TypeScript
let mutableList: number[] = [1, 2, 3];
let immutableList: readonly number[] = [4, 5, 6];

// Câu hỏi 1: Gán mutableList cho immutableList có hợp lệ không?
immutableList = mutableList;

// Câu hỏi 2: Gán immutableList cho mutableList có hợp lệ không?
mutableList = immutableList;
Yêu cầu: Xác định dòng gán nào gây lỗi và giải thích cơ chế bảo vệ an toàn của TypeScript.
*/
/*
Câu 1 là có hợp lệ
Câu 2 là không hợp lệ vì đây chỉ đc xem thôi, không đc làm j khác.
*/