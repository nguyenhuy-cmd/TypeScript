/*
Hợp đồng cho Class với từ khóa implements
Xây dựng hệ thống thanh toán qua interface:

Định nghĩa interface PaymentProcessor gồm:

Thuộc tính readonly providerName: string.

Phương thức processPayment(amount: number): boolean.

Phương thức refundPayment(transactionId: string): Promise<string>.

Xây dựng class StripeProcessor thực thi (implements) PaymentProcessor.
*/
interface PaymentProcessor{
    readonly providerName: string;
    processPayment(amount: number): boolean;
    refundPayment(transactionId: string): Promise<string>;
}

class StripeProcessor implements PaymentProcessor {
    public readonly providerName: string;
    constructor(providerName: string){
        this.providerName = providerName;
    }
    processPayment(amount: number): boolean{
        console.log(`Đang thanh toán ${amount}`);
        return true;
    }
    refundPayment(transactionId: string): Promise<string>{
      return Promise.resolve(
        `Hoàn tiền thành công cho giao dịch: ${transactionId}`
      )
    }
}  