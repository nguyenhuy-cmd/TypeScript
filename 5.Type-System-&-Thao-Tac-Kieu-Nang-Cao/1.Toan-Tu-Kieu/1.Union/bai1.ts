/*
Union nguyên thủy và Type Narrowing cơ bản
Viết hàm định dạng tiền tệ hoặc độ dài:

Định nghĩa hàm formatValue(input: string | number | boolean): string.

Yêu cầu:

Nếu là number: Format thành chuỗi tiền tệ cố định 2 chữ số thập phân (dùng .toFixed(2)).

Nếu là string: Chuyển chuỗi thành chữ in hoa và bỏ khoảng trắng thừa (dùng .trim().toUpperCase()).

Nếu là boolean: Trả về "YES" nếu true, ngược lại "NO".

Không dùng ép kiểu thủ công (as), chỉ dùng typeof narrowing.
*/
function formatValue(input: string | number | boolean): string{
    if(typeof input === "number"){
        return input.toFixed(2);
    }

    if(typeof input === "string"){
        return input.trim().toUpperCase();
    }

    if(typeof input === "boolean"){
        return "YES";
    }

    return "NO";
}