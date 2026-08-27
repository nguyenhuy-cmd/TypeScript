/*
Hàm hỗ trợ cả Call Signature và Construct Signature (Hybrid)
Xét hành vi giống hàm Date trong JavaScript chuẩn:

Định nghĩa interface TimestampWrapper:

Có thuộc tính value: number.

Định nghĩa interface TimestampUtility:

Call Signature: (): string (khi gọi TimestampUtility() trả về chuỗi ISO hiện tại).

Construct Signature: new (val: number): TimestampWrapper (khi gọi new TimestampUtility(val) trả về object chứa thuộc tính value).

Viết implementation cho đối tượng thỏa mãn TimestampUtility.
*/
interface TimestampWrapper{
    value: number;
}
interface TimestampUtility{
    (): string; 
    new (val: number): TimestampWrapper;
}

function TimestampUtility(this: TimestampWrapper, val?: number): string | TimestampWrapper {
  if (typeof val === "number") {
    this.value = val;
    return this;
  }

  return new Date().toISOString();
}

const timestampUtility = TimestampUtility as unknown as TimestampUtility;

console.log(timestampUtility());
const timestamp = new timestampUtility(12345678);
console.log(timestamp.value);

