/*
Cạm bẫy Structural Typing với Nominal Identity
Trong hệ thống tài chính, việc nhầm lẫn giữa hai loại tiền tệ hoặc hai loại định danh dạng chuỗi 
có thể gây lỗi nghiêm trọng:

TypeScript
type USD = number;
type EUR = number;

function transferUSD(amount: USD) {
  console.log(`Transferred $${amount}`);
}

const myEuros: EUR = 100;
transferUSD(myEuros); // TypeScript hoàn toàn không báo lỗi!
Yêu cầu:

Giải thích tại sao TypeScript chấp nhận đoạn mã trên dù bản chất USD và EUR là hai đơn vị tiền tệ 
khác nhau.

Sử dụng kỹ thuật Type Branding (Nominal Typing simulation) với cấu trúc __brand để tái cấu trúc 
hai kiểu USD và EUR, khiến cho transferUSD(myEuros) bị compiler báo lỗi ngay lập tức.
*/
/* 
Lý do chấp nhận: Cả USD và EUR chỉ là các Type Alias trỏ về kiểu nguyên thủy number. 
Vì cấu trúc của chúng đều là number, Structural Type System coi chúng là một.
*/
//Cách giải quyết
type USD = number & {readonly __brand: "USD"};
type EUR = number & {readonly __brand: "EUR"};

// Helper functions để đúc tiền tệ an toàn
function makeUSD(n: number): USD{
    return n as USD;
}
function makeEUR(n: number): EUR{
    return n as EUR;
}

function transferUSD(amount: USD) {
  console.log(`Transferred $${amount}`);
}

const myEuros = makeEUR(100);
const myUSD = makeUSD(50);
transferUSD(myUSD); // TypeScript hoàn toàn không báo lỗi!