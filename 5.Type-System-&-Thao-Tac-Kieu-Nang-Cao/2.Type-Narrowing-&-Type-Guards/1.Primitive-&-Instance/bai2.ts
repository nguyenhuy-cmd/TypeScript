/*
Phân loại lỗi và thời gian với instanceof
Trong xử lý ngoại lệ và logging, dữ liệu đầu vào có thể là một chuỗi thời gian, một instance Date, hoặc đối tượng lỗi:

Cho hàm formatLogEntry(target: string | Date | Error): string.

Yêu cầu:

Dùng instanceof để kiểm tra:

Nếu là Date: Trả về định dạng ISO string (.toISOString()).

Nếu là Error: Trả về chuỗi "Error: " + target.message.

Nhánh còn lại (kiểu string): Trả về chuỗi đó kèm tiền tố "[LOG]: ".
*/
function formatLogEntry(target: string | Date | Error): string{
    if(target instanceof Date){
        return target.toISOString();
    }
    if(target instanceof Error){
        return `Error: ${target.message}`
    }

    return  `[LOG]: ${target} `
}