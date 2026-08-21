/*
Khai báo hàm cơ bản & Phân biệt void vs undefined
Cho các khai báo hàm sau. Hãy xác định hàm nào hợp lệ và hàm nào báo lỗi compile-time:

TypeScript
// 1.
function logMessage(msg: string): void {
  console.log(msg);
}

// 2.
function calculateNothing(): void {
  return 100;
}

// 3.
function explicitlyUndefined(): undefined {
  console.log("No return here");
}

// 4.
function emptyReturn(): void {
  return;
}
Yêu cầu: Giải thích lý do vì sao hàm bị lỗi và cách sửa để code hợp lệ.
*/
// 1 và 4 là hợp lệ
// 2 sai vì void chỉ đc trả về return và return undefine
function calculateNothing(): void {
    return;
}

// 3 sai vì undefine bắt buộc phải trả về return undefine
function explicitlyUndefined(): undefined {
    console.log("No return here");
    return undefined;
}