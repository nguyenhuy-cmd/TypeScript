/*
Best Common Type trong Mảng và Đối tượng
Xác định kiểu dữ liệu mà compiler suy luận cho các biến phức tạp sau:

TypeScript
// 1. Mảng hỗn hợp
const mixedArray = [1, 2, "three", true];

// 2. Mảng chứa đối tượng
const items = [
  { id: 1, label: "Save" },
  { id: 2, label: "Cancel", isDefault: true }
];

// 3. Mảng lồng nhau
const matrix = [[1, 2], ["a", "b"]];
Yêu cầu: Viết lại kiểu suy luận của mixedArray, items, và matrix.
*/
/*
1.(number | string | boolean)
2. mảng các object
3. mảng chứa các mảng
*/