/*
Khai báo và phân loại mảng
Khai báo các biến sau bằng cả 2 cú pháp (rút gọn và generic):

userNames: mảng chứa các chuỗi ký tự.

matrix: mảng 2 chiều chứa các số (number[][] hoặc Generic tương đương).

configCodes: mảng bất biến chứa các số nguyên, khởi tạo với giá trị [404, 500, 200].
*/
// Rút gọn 
const userNames: string[] = ["huy", "Nam", "Hà"];
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]
const configCodes: readonly number[] = [404, 500, 200]

// Generic
const userName2: Array<string> = ["huy", "Nam", "Hà"];
const matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6]
]
const configCodes2: ReadonlyArray<number> = [404, 500, 200];
