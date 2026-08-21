/*
Xác định hàm có kiểu trả về là never
Xét các khai báo hàm sau. Hãy xác định kiểu trả về thực tế (void hay never) của từng hàm:

TypeScript
// Hàm 1
function fail(message: string) {
  throw new Error(message);
}

// Hàm 2
function logError(message: string) {
  console.error(message);
}

// Hàm 3
function keepRunning() {
  while (true) {
    // Luồng lặp vô hạn
  }
}
Yêu cầu: Giải thích tại sao hàm 1 và hàm 3 lại có kiểu trả về là never thay vì void.
*/
/*
1. never vì do hàm luôn ném ngoại lệ và không bao giờ chạm tới điểm kết thúc bình thường
2. void vì hàm chạy xong errow và trả về undefine
3.never vì hàm chạy vô tạn, không có điểm kết thúc
*/