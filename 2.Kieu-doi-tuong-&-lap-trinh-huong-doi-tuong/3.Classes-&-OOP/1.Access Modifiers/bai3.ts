/*
Xây dựng hệ thống giao dịch ngân hàng an toàn
Viết class SecureWallet kết hợp các Access Modifiers:

Thuộc tính #balance: Native private field lưu số dư ví (khởi tạo nhận vào qua constructor).

Thuộc tính protected ownerId: Lưu mã định danh chủ sở hữu.

Thuộc tính public readonly walletId: Mã định danh ví chỉ đọc.

Phương thức:

public deposit(amount: number): void: Cộng tiền vào #balance (nếu amount > 0).

public withdraw(amount: number): boolean: Rút tiền nếu amount > 0 và #balance >= amount.

public getBalance(): number: Trả về số dư hiện tại.

Viết thêm class PremiumWallet extends SecureWallet:

Có phương thức getWalletSummary(): string in ra thông tin gồm walletId, ownerId và số dư lấy qua getBalance().
*/
class SecureWallet{
    #balance: number; 
    protected ownerId: string;
    public readonly walletId: string;

    constructor(balance: number, ownerId: string, walletId: string){
        this.#balance = balance;
        this.ownerId = ownerId;
        this.walletId = walletId;
    }

    deposit(amount: number): void{
        if(amount > 0){
            this.#balance += amount;
        }
    }
    withdraw(amount: number): boolean{
        if(amount > 0 && this.#balance >= amount){
            this.#balance -= amount;
            return true;
        }
        return false
    }
    getBalance(): number{
        return this.#balance
    }
}

class PremiumWallet extends SecureWallet{
    getWalletSummary(): string{
        return `Wallet ID: ${this.walletId}, Owner ID: ${this.ownerId}, Balance: ${this.getBalance()}`;
    }
}