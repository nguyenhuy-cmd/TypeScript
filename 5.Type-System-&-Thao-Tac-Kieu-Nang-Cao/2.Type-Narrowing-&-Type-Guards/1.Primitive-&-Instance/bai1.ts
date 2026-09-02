/*
Xử lý đầu vào hỗn hợp với typeof và bẫy null
Viết hàm chuẩn hóa dữ liệu đầu vào:

Định nghĩa hàm normalizeInput(input: string | number | null | undefined): string.

Yêu cầu:

Nếu là string: Trả về chuỗi sau khi loại bỏ khoảng trắng hai đầu (.trim()).

Nếu là number: Trả về chuỗi số dưới dạng nhị phân (input.toString(2)).

Nếu là null hoặc undefined: Trả về chuỗi rỗng "".

Tránh lỗi khi dùng typeof input === "object".
*/
function normalizeInput(input: string | number | null | undefined): string{
    if(typeof input === "string"){
        return input.trim();
    }
    if(typeof input === "number"){
        return input.toString(2)
    }
    if(input === null || input ===undefined){
        return "";
    }
    return "";
}