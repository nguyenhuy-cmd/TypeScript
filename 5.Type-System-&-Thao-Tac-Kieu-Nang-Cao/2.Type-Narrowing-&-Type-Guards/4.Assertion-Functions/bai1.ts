/*
Assertion Function cơ bản với giá trị Nullable
Xây dựng hàm assertion đảm bảo giá trị không rỗng:

Định nghĩa hàm assertIsDefined<T>(val: T): asserts val is NonNullable<T>:

Ném ra new Error("Value must not be null or undefined") nếu val === null hoặc val === undefined.

Cho một biến kiểm thử:

TypeScript
const rawId: string | null = Math.random() > 0.5 ? "ID_9921" : null;
Gọi assertIsDefined(rawId); rồi gọi tiếp rawId.toUpperCase(); ở dòng kế tiếp mà không cần bọc trong if.
*/
function assertIsDefined<T>(val: T): asserts val is NonNullable<T>{
    if(val === null || val === undefined){
        throw new Error("Value must not be null or undefined")
    }
}
const rawId: string | null = Math.random() > 0.5 ? "ID_9921" : null;
assertIsDefined(rawId);

console.log(rawId.toUpperCase());
