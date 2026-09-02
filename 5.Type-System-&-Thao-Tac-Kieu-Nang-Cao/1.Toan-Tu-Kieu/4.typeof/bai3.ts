/*
Trích xuất chữ ký của Hàm và Class Constructor
Xét một hàm xử lý và một class có sẵn từ thư viện ngoài:

TypeScript
function processPayment(orderId: string, amount: number, isExpress: boolean) {
  return {
    success: true,
    transactionId: `TX_${Date.now()}`,
    orderId,
    amount,
  };
}

class UserClient {
  constructor(public baseUrl: string, public timeout: number) {}
  fetchData() {
    return "data";
  }
}
Yêu cầu:

Dùng typeof để trích xuất kiểu của hàm processPayment vào type PaymentHandlerFn.

Dùng typeof để trích xuất kiểu Constructor của class UserClient vào type UserClientConstructor.

Giải thích sự khác nhau giữa UserClient và typeof UserClient.
*/
function processPayment(orderId: string, amount: number, isExpress: boolean) {
  return {
    success: true,
    transactionId: `TX_${Date.now()}`,
    orderId,
    amount,
  };
}
type PaymentHandlerFn = typeof processPayment;
class UserClient {
  constructor(public baseUrl: string, public timeout: number) {}
  fetchData() {
    return "data";
 }
}
type UserClientConstructor = typeof UserClient;

/*
3.Phân biệt UserClient vs typeof UserClient:
- UserClient là kiểu của object sau khi new
- typeof UserClient là kiểu của class constructor
*/
