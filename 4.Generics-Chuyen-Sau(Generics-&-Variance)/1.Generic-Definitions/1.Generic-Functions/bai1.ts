/*
Generic Utility Functions cơ bản
Viết hai hàm Generic sau:

Hàm firstElement<T>(arr: T[]): T | undefined: Nhận vào một mảng chứa các phần tử kiểu T bất kỳ và trả về phần tử đầu tiên (hoặc undefined nếu mảng rỗng).

Hàm pair<T, U>(first: T, second: U): [T, U]: Nhận vào hai giá trị thuộc hai kiểu khác nhau và trả về một Tuple chứa hai phần tử đó.

Yêu cầu: Kiểm tra tính an toàn kiểu bằng cách gọi hàm với các kiểu dữ liệu khác nhau (số, chuỗi, object) và quan sát kiểu trả về được compiler tự động suy luận.
*/
function firstElement<T>(arr: T[]): T | undefined{
    return arr.length > 0 ? arr[0] : undefined;
}
const num = firstElement([10, 20, 30]);      // Kiểu suy luận: number | undefined
const str = firstElement(["apple", "banana"]); // Kiểu suy luận: string | undefined
const empty = firstElement([]); // Kiểu suy luận: undefined

function pair<T, U>(first: T, second: U): [T, U]{
    return [first, second];
}
const soAndChu = pair(10, "10");