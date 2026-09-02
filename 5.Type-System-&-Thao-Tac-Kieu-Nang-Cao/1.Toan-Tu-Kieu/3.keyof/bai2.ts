/*
keyof kết hợp với Index Signatures
Xét hai kiểu đối tượng sau:

TypeScript
type Dictionary = {
  [key: string]: unknown;
  count: number;
};

type NumericList = {
  [index: number]: string;
  length: number;
};
Yêu cầu:

Xác định kiểu kết quả của type DictKeys = keyof Dictionary;. Tại sao lại xuất hiện cả number dù index signature chỉ ghi string?

Xác định kiểu kết quả của type ListKeys = keyof NumericList;
*/

type Dictionary = {
  [key: string]: unknown;
  count: number;
};

type NumericList = {
  [index: number]: string;
  length: number;
};
type DictKeys = keyof Dictionary;
/* 
1. type DictKeys = keyof Dictionary; có kiểu là string | number.
vì Trong JavaScript runtime, khi bạn truy cập thuộc tính bằng số (ví dụ obj[0]), 
engine luôn ngầm ép số 0 thành chuỗi "0". 
Do đó, nếu một đối tượng chấp nhận key chuỗi thì nó cũng tự động chấp nhận cả key số.
*/

/*
type ListKeys = keyof NumericList;. thì chỉ sinh ra kiểu number thôi nhé 
*/