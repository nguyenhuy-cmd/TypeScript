/*
Hiện tượng bỏ qua giá trị trả về trong Callback (void in Callback)
Xét đoạn code thao tác với mảng sau:

TypeScript
const numbers = [1, 2, 3];
const result: number[] = [];

// Array.prototype.forEach nhận callback có kiểu trả về là void:
// (value: number, index: number, array: number[]) => void
numbers.forEach((num) => result.push(num)); 

const value = numbers.forEach((num) => num * 2);
Yêu cầu:

Phương thức result.push() trả về một số (number - độ dài mới của mảng). Tại sao TypeScript không báo lỗi khi truyền nó vào forEach (vốn yêu cầu kiểu trả về là void)?

Kiểu dữ liệu và giá trị thực tế của biến value sau khi chạy hàm forEach là gì?
*/
/*
Trả lời:
TypeScript áp dụng quy tắc an toàn cho callback: Kiểu () => void trong callback có nghĩa 
là "bên gọi không quan tâm đến giá trị trả về", chứ không cấm hàm thực thi trả về giá trị. 
Do đó, result.push() (trả về number) vẫn được chấp nhận nhưng giá trị số đó bị bỏ qua.

Biến value có kiểu là void tại compile-time và có giá trị thực tế tại runtime là undefined.
*/