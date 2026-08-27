/*
Type Argument Inference vs Explicit Type Arguments
Xét hai tình huống gọi hàm generic sau:

TypeScript
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

// Dòng 1:
const merged1 = mergeArrays(numbers, strings); // TypeScript báo lỗi tại đây

// Dòng 2:
const merged2 = mergeArrays<number | string>(numbers, strings); // Hợp lệ
Yêu cầu:

Giải thích lý do vì sao dòng 1 bị báo lỗi Type Error dù cả hai mảng đều là mảng hợp lệ.

Giải thích cơ chế giải quyết của dòng 2 khi truyền Type Argument tường minh <number | string>.
*/
/*
Nguyên nhân dòng 1 lỗi:

Khi gọi mergeArrays(numbers, strings), TypeScript phân tích tham số thứ nhất numbers và suy luận T là number.

Khi đến tham số thứ hai strings (kiểu string[]), TypeScript so khớp với kiểu mong đợi T[] (tức là number[]) và phát hiện kiểu string không thể gán cho 
number, dẫn đến lỗi biên dịch.
*/

/*
Cơ chế dòng 2:

Bằng cách chỉ định rõ ràng mergeArrays<number | string>(...), ta thiết lập T = number | string.

Khi đó cả numbers (kiểu number[]) và strings (kiểu string[]) đều tương thích với kiểu tham số mong đợi (number | string)[], giúp biểu thức hợp lệ và 
trả về mảng kiểu (number | string)[].
*/