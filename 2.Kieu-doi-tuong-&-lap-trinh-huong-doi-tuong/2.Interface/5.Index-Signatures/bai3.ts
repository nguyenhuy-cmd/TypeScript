/*
Index Signature kết hợp noUncheckedIndexedAccess & Narrowing
Khi truy cập một key động từ Index Signature, giá trị nhận được có nguy cơ là undefined nếu key đó không tồn tại ở runtime.

Định nghĩa interface LocalizationDictionary:

TypeScript
interface LocalizationDictionary {
  [localeKey: string]: string;
}
Viết hàm getTranslation(dict: LocalizationDictionary, key: string, fallback: string): string:

Lấy bản dịch tương ứng với key.

Nếu giá trị tìm thấy là undefined hoặc chuỗi rỗng "", trả về giá trị fallback.

Hàm phải đảm bảo an toàn tuyệt đối khi bật cờ noUncheckedIndexedAccess trong tsconfig.json.
*/
interface LocalizationDictionary {
  [localeKey: string]: string;
}
function getTranslation(dict: LocalizationDictionary, key: string, fallback: string): string{
    
    // Khi bật noUncheckedIndexedAccess translation có kiểu là string | undefined
    const translation : string | undefined = dict[key];

    if(translation !== undefined && translation.trim() !== ""){
        return translation;
    }
    return fallback;
}
// Kiểm thử
const viDict: LocalizationDictionary = {
    welcome: "Xin chào",
    empty_btn: "",
}
console.log(getTranslation(viDict, "welcome", "Hello"));    // "Xin chào"
console.log(getTranslation(viDict, "empty_btn", "Submit"));  // "Submit"
console.log(getTranslation(viDict, "goodbye", "Bye!"));