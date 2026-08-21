/*
Bài 1: Quan sát lỗi Runtime do any vô hiệu hóa Compiler
Cho đoạn code sau. Hãy giải thích tại sao TypeScript không báo lỗi khi biên dịch (compile-time), 
nhưng chương trình lại sập khi chạy (runtime):

TypeScript
let rawData: any = { name: "Alice", calculateTax: null };

// TypeScript hoàn toàn im lặng ở các dòng này:
rawData.nonExistentMethod();
const tax = rawData.calculateTax();
const length = rawData.name.toUpperCase().split("").invalidProp.length;
Yêu cầu: Hãy chỉ ra 3 nguy cơ lớn nhất khi dùng any được thể hiện qua đoạn code trên.
*/
/*
Đáp án 

Nguyên nhân: Kiểu any hoạt động như một "tấm vé miễn trừ", yêu cầu TypeScript bỏ qua hoàn toàn việc kiểm tra cú pháp, thuộc tính và phương thức trên đối tượng đó.

3 nguy cơ chính:

+ Truy cập thuộc tính không tồn tại (undefined) mà không có cảnh báo.

+ Gọi một biến không phải hàm (not a function) dẫn đến sập ứng dụng.

+ Mất tính năng Autocomplete (Gợi ý code) và Refactoring an toàn của IDE.
*/