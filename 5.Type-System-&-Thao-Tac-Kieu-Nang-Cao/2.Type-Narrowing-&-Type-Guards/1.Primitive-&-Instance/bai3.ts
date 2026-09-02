/*
Phân biệt các cấu trúc Object với toán tử in
Xét hệ thống xử lý thanh toán với hai phương thức khác nhau:

TypeScript
type CreditCardPayment = {
  cardNumber: string;
  cvv: string;
  expireMonth: number;
};

type CryptoPayment = {
  walletAddress: string;
  network: "ETH" | "BTC" | "SOL";
};
Viết hàm executePayment(payment: CreditCardPayment | CryptoPayment): string.

Yêu cầu:

Dùng toán tử in để kiểm tra thuộc tính đặc trưng.

Nếu là CreditCardPayment: Trả về "Charged card ending with " + cardNumber.slice(-4).

Nếu là CryptoPayment: Trả về "Sent crypto to address " + walletAddress + " on network " + network
*/
type CreditCardPayment = {
  cardNumber: string;
  cvv: string;
  expireMonth: number;
};

type CryptoPayment = {
  walletAddress: string;
  network: "ETH" | "BTC" | "SOL";
};
function executePayment(payment: CreditCardPayment | CryptoPayment): string{
    if( "cardNumber" in payment){
        return `Charged card ending with ${payment.cardNumber.slice(-4)}`
    }
    return `Sent crypto to address ${payment.walletAddress} on network ${payment.network}`;
}

const card: CreditCardPayment = { cardNumber: "4111222233334444", cvv: "123", expireMonth: 12 };
const cryptoPayment: CryptoPayment = { walletAddress: "0xABC123...", network: "ETH" };

console.log(executePayment(card));   // "Charged card ending with 4444"
console.log(executePayment(cryptoPayment)); // "Sent crypto to address 0xABC123... on network ETH"