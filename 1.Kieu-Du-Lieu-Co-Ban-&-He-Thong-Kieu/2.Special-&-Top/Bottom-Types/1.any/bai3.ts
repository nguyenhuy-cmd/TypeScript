/*
Refactor loại bỏ any trong hàm xử lý dữ liệu động
Một lập trình viên sử dụng any để tắt kiểm tra kiểu khi thao tác với mảng hỗn hợp:

TypeScript
// Code chưa an toàn
function sumNumbersOnly(items: any[]): any {
  return items.reduce((acc: any, cur: any) => {
    if (typeof cur === "number") {
      return acc + cur;
    }
    return acc;
  }, 0);
}
Yêu cầu:

Viết lại hàm sumNumbersOnly với kiểu đầu vào và đầu ra tường minh mà không dùng bất kỳ từ khóa any nào.

Hàm nhận vào mảng chứa nhiều kiểu dữ liệu khác nhau (unknown[]) và trả về một số (number).
*/
// Code chưa an toàn
function sumNumbersOnly(items: unknown[]): number {
  return items.reduce<number>((acc: number, cur: unknown) => {
    if (typeof cur === "number") {
      return acc + cur;
    }
    return acc;
  }, 0);
}
const total = sumNumbersOnly([10, "apple", true, 25, null, 5]);