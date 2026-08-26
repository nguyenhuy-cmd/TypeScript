/*
Xác thực dữ liệu (Validation) và Encapsulation với Setters
Xây dựng class quản lý người dùng với dữ liệu được kiểm soát:

Tạo class UserProfile:

Thuộc tính private _age: number = 0.

Getter get age(): number trả về giá trị _age.

Setter set age(value: number):

Nếu value < 0 hoặc value > 120: ném ra RangeError("Age must be between 0 and 120").

Nếu hợp lệ: gán vào this._age.
*/
class UserProfile{
    constructor(private _age: number = 0){}
    get age(): number{
        return this._age;
    }
    set age(value: number){
        if(value < 0 || value > 120){
            throw new RangeError("Age must be between 0 and 120")
        }else{
        this._age = value;
    }
    }
}