/*
Call Signatures kết hợp Overload trong Type Alias
Định nghĩa một hàm xử lý chuyển đổi dữ liệu bằng Call Signature:

Định nghĩa type Transformer = { (input: string): string; (input: number): number; version: string; };

Viết một hàm transform tuân thủ đúng kiểu Transformer.

Kiểm tra việc gọi hàm với string, number và truy cập thuộc tính .version.
*/
type Transformer = {
    (input: string): string;
    (input: number): number;
    version: string;
};
const transform: Transformer = Object.assign(
    (input: string | number): string | number => {
        if (typeof input === "string") {
            return input.trim().toUpperCase()
        }
        return input * 2;
    }, {
    version: "1.0.0"
}
);
