/*
Xử lý xung đột kiểu khi mở rộng (Intersection vs Declaration Merging)
Khi cố gắng kết hợp 2 cấu trúc có cùng tên thuộc tính nhưng khác kiểu dữ liệu:

TypeScript
// Tình huống A: interface merging
interface ResponseA {
  status: number;
}
interface ResponseA {
  status: string; // Điều gì xảy ra ở đây?
}

// Tình huống B: type intersection
type PartOne = { status: number };
type PartTwo = { status: string };
type MergedResponse = PartOne & PartTwo; // Kiểu của status ở đây là gì?
Yêu cầu: Phân tích cách xử lý xung đột kiểu của interface và type trong 2 tình huống trên.
*/
// Interface: sẽ báo lỗi vì không gộp được 2 kiểu khác nhau
// type: sẽ làm được: PartOne & PartTwo nhưng sẽ hiện lên: never