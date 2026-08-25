/*
Phân biệt phạm vi truy cập public, protected, private
Cho cấu trúc kế thừa sau:

TypeScript
class Account {
  public id: string;
  protected balance: number;
  private secretPin: number;

  constructor(id: string, balance: number, secretPin: number) {
    this.id = id;
    this.balance = balance;
    this.secretPin = secretPin;
  }
}

class SavingsAccount extends Account {
  public getBalance(): number {
    return this.balance; // (1)
  }

  public getPin(): number {
    return this.secretPin; // (2)
  }
}

const acc = new SavingsAccount("ACC_01", 1000, 1234);
console.log(acc.id);      // (3)
console.log(acc.balance); // (4)
Yêu cầu: Xác định dòng nào trong các dòng (1), (2), (3), (4) sẽ bị TypeScript báo lỗi compile-time và giải thích lý do.
*/
// (1): hợp lệ
// (2): báo lỗi
// (3): hợp lệ
// (4): không hợp lệ vì nó ở ngoài instance(đối tượng)