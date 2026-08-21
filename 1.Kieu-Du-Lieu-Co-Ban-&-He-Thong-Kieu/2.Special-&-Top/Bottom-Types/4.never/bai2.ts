/*
Phép giao kiểu dữ liệu (Intersection & never)
Dự đoán kiểu dữ liệu được TypeScript suy luận cho các type alias sau:

TypeScript
type CaseA = string & number;
type CaseB = ("circle" | "square") & "triangle";
type CaseC = { id: number } & { id: string };
Yêu cầu: Giải thích lý do tại sao các kiểu trên lại triệt tiêu về never.
*/
/*
Đáp án:
CaseA: never vì 1 biến không thể vừa là chuỗi vừa là số
CaseB: never vì 2 phần tử không có điểm chung 
CaseC: thuộc tính id bị ép bởi 2 kiểu number và string, dẫn đến thuộc tính id mang kiểu number
*/