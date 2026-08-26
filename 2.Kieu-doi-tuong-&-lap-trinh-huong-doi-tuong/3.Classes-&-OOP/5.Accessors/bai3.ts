/*
Get/Set Types khác biệt (TypeScript 4.3+)
Trong thực tế, khi nhận dữ liệu từ form HTML hoặc query string, các giá trị số thường ở dạng string. Ta có thể cho phép setter nhận cả string | number, nhưng getter luôn chuẩn hóa trả về number.

Tạo class PriceTag:

Thuộc tính private _amount: number = 0.

Setter set price(val: string | number):

Nếu val là string, chuyển đổi bằng parseFloat().

Đảm bảo giá trị lưu vào _amount luôn là number và không âm (nếu âm thì ném lỗi).

Getter get price(): number: trả về số tiền dạng number đã làm tròn 2 chữ số thập phân.
*/
class PriceTag{
    constructor(private _amount: number = 0){}
    set price(val: string | number){
        if(typeof val === "string"){
            val = parseFloat(val);
        }

        if( val < 0){
            throw new Error(`Không được sử dụng số âm`);
        }
        this._amount = val;
    }

    get price(): number{
        return Number(this._amount.toFixed(2));
    }
}
const tien = new PriceTag(5000000);
console.log(tien.price);
