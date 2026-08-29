/*
Xây dựng Stream/Source chỉ đọc với out T
Thiết kế cấu trúc dữ liệu ReadonlyStream:

Định nghĩa interface ReadonlyStream<out T>:

Thuộc tính readonly current: T.

Phương thức next(): T | null.

Phương thức map<U>(transformer: (value: T) => U): ReadonlyStream<U>.

Xây dựng class ArrayStream<out T> implement ReadonlyStream<T>:

Constructor nhận vào một mảng private readonly items: readonly T[].

Cài đặt các phương thức theo đúng chuẩn hiệp biến (out T).

Kiểm thử gán ReadonlyStream<string> cho ReadonlyStream<string | number>.
*/
interface ReadonlyStream<out T>{
    readonly current: T;
    next(): T | null;
    map<U>(transformer: (value: T) => U): ReadonlyStream<U>;
}
class ArrayStream<out T> implements ReadonlyStream<T> {
    private index: number = 0
    constructor(private readonly items: readonly T[]){}
    
    public get current(): T {
    return this.items[this.index];
  }
    public next(): T | null{
        this.index += 1;
        return this.index < this.items.length ? this.items[this.index] : null
    }

    public map<U>(transformer: (value: T) => U): ReadonlyStream<U>{
        const mappedItems = this.items.map(transformer);
        return new ArrayStream<U>(mappedItems);
    }
}

// kiểm tra tính hiệu biến
const stringStream: ReadonlyStream<string> = new ArrayStream(["TypeScript", "Reat", "Node"]);

// Hợp lệ: ReadonlyStream<string> có thể gán cho ReadonlyStream<string | number>
const unionStream: ReadonlyStream<string | number> = stringStream;

console.log(unionStream.current); // "TypeScript"
console.log(unionStream.next());    // "React"