/*
Khai báo Interface kết hợp readonly và ?
Thiết kế cấu trúc cho tài khoản thanh toán:

Định nghĩa interface BankAccount gồm:

accountNumber: chuỗi ký tự chỉ đọc (readonly).

holderName: chuỗi ký tự.

balance: số thực chỉ đọc (readonly).

nickname: chuỗi ký tự tùy chọn (?).

email: chuỗi ký tự tùy chọn (?).

Viết hàm createAccount(accNum: string, name: string, initBalance: number): BankAccount trả về đối tượng tài khoản mới.

Thử thay đổi accountNumber và balance sau khi khởi tạo để kiểm tra lỗi biên dịch.
*/
interface BankAccount{
    readonly accountNumber: string,
    holderName: string,
    readonly balance: number,
    nickname?: string,
    email?: string
}

function createAccount(accNum: string, name: string, initBalance: number): BankAccount{
    return {
        accountNumber: accNum,
        holderName: name,
        balance: initBalance
    }
}