/*
Invariance với Array và Mutable Reference
Trong TypeScript, mảng thông thường (T[]) về bản chất là Invariant (mặc dù để tương thích ngược với JS thì TS có nới lỏng trong vài trường hợp).

Viết hàm swapFirst<in out T>(boxA: { value: T }, boxB: { value: T }): void:

Hoán đổi giá trị value giữa boxA và boxB.

Cho hai đối tượng:

TypeScript
const numBox: { value: number } = { value: 42 };
const strBox: { value: string } = { value: "hello" };
const literalBox: { value: 42 } = { value: 42 };
Kiểm tra việc gọi:

swapFirst(numBox, literalBox);

swapFirst(numBox, strBox);

Phân tích tại sao tính chất bất biến bảo vệ an toàn cho cả hai hộp.
*/
function swapFirst<T>(boxA: { value: T }, boxB: { value: T }): void{
    const temp = boxA.value;

    boxA.value = boxB.value;
    boxB.value = temp;
}

const numBox: { value: number } = { value: 42 };
const strBox: { value: string } = { value: "hello" };
const literalBox: { value: 42 } = { value: 42 };
swapFirst(numBox, literalBox);
// swapFirst(numBox, strBox); SAi