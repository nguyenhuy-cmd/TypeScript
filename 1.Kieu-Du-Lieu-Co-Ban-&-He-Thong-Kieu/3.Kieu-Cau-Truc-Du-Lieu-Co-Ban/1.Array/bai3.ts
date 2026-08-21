/*
Ngăn chặn tác dụng phụ (Side-effects) với readonly T[]
Một lập trình viên viết hàm lấy phần tử lớn nhất và sắp xếp mảng gốc:

TypeScript
// Code chưa an toàn - gây đột biến mảng truyền vào
function sortAndGetMax(data: number[]): number {
  data.sort((a, b) => a - b);
  return data[data.length - 1];
}
Yêu cầu:

Sửa lại kiểu tham số data thành mảng chỉ đọc ReadonlyArray<number>.

Sửa lại logic hàm sao cho không thay đổi mảng truyền vào nhưng vẫn tìm được giá trị lớn nhất 
(bằng cách tạo bản sao mảng trước khi sắp xếp, hoặc dùng phương thức .toSorted() / Math.max()).
*/
function sortAndGetMax(data: ReadonlyArray<number>): number {
    const copy = [...data];
    copy.sort((a, b) => a - b)
    return copy[copy.length - 1];
}