/*
Áp dụng Contract trong Dependency Inversion (SOLID)
Xây dựng module thanh toán hoàn chỉnh dựa trên hợp đồng:

Định nghĩa contract interface PaymentGateway:

readonly gatewayName: string;

charge(amount: number, currency: string): Promise<{ success: boolean; txId: string }>;

Tạo 2 class khác nhau cùng tuân thủ hợp đồng trên:

PaypalGateway implements PaymentGateway (sinh mã txId dạng "PAYPAL_xxx").

StripeGateway implements PaymentGateway (sinh mã txId dạng "STRIPE_xxx").

Viết class CheckoutService:

Constructor nhận vào bất kỳ đối tượng nào tuân thủ PaymentGateway (dùng Parameter Properties).

Phương thức async processOrder(total: number): Promise<void> để thực hiện thanh toán và in ra log thành công.
*/
interface PaymentGateway{
    readonly gatewayName: string;
    charge(amount: number, currency: string): Promise<{ success: boolean; txId: string }>
}
class PaypalGateway implements PaymentGateway{
    readonly gatewayName = "PayPal";
    
    async charge(amount: number, currency: string) {
        return {
            success: true,
            txId: `PAYPAL_${Math.floor(Math.random() * 10000)}`
        }
    }
}
class StripeGateway implements PaymentGateway{
    readonly gatewayName = "STRIPE";

    async charge(amount: number, currency: string) {
        return {
            success: true,
            txId: `STRIPE_${Math.floor(Math.random() * 10000)}`
        }        
    }
}
class CheckoutService{
    constructor(private readonly gateway: PaymentGateway){}

    async processOrder(total: number){
        console.log(`Đang bắt đầu thanh toán qua ${this.gateway.gatewayName}...`);
        const res = await this.gateway.charge(total, "USD");
        if(res.success){
            console.log(`Đã xác nhận thanh toán! Mã giao dịch: ${res.txId}`);
        }
    }
}
// Kiểm thử
const checkoutWithStripe = new CheckoutService(new StripeGateway());
checkoutWithStripe.processOrder(150);

const checkoutWithPaypal = new CheckoutService(new PaypalGateway());
checkoutWithPaypal.processOrder(300);









