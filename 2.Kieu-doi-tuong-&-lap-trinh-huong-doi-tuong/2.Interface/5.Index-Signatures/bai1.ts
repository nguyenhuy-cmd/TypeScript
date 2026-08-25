/*
Khai báo Dictionary động và Readonly Index Signature

Định nghĩa interface CurrencyRates:

Có Index Signature với key là string (mã tiền tệ như "USD", "EUR") và value là number (tỷ giá).

Thuộc tính Index Signature phải được đánh dấu readonly để chống thay đổi sau khi khởi tạo.

Định nghĩa interface UserRolesDictionary:

Khóa là string (tên người dùng) và giá trị là một mảng chuỗi string[] (danh sách quyền của người dùng đó).

Tạo các đối tượng mẫu thỏa mãn 2 interface trên.
*/
interface CurrencyRates{
   readonly [key: string] : number;
}
interface UserRolesDictionary{
    [key: string]: string[];
}
const tien: CurrencyRates = {
  amount: 100000,
}
const nguoiDung: UserRolesDictionary = {
    ten: ["Ha", "Huy", "Lan"]
}