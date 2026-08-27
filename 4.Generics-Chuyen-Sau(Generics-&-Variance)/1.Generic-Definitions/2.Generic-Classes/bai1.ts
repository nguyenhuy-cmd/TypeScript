/*
Xây dựng cấu trúc dữ liệu Stack hoàn chỉnh
Hiện thực cấu trúc dữ liệu ngăn xếp (LIFO - Last In First Out):

Tạo class Stack<T>:

Thuộc tính private items: T[] = [].

Phương thức push(item: T): void: Thêm phần tử vào đỉnh ngăn xếp.

Phương thức pop(): T | undefined: Lấy và xóa phần tử ở đỉnh ngăn xếp.

Phương thức peek(): T | undefined: Xem phần tử ở đỉnh mà không xóa.

Getter get size(): number: Trả về số lượng phần tử hiện có.

Getter get isEmpty(): boolean: Trả về true nếu rỗng, ngược lại false
*/
class Stack<T>{
    private items: T[] = [];
    push(item: T): void{
        this.items.push(item);
    }

    pop(): T | undefined{
        return this.items.pop();
    }

    peek(): T | undefined{
        return this.items[this.items.length - 1];
    }

    get size(): number{
        return this.items.length;
    }

    get isEmpty(): boolean{
        return this.items.length === 0;
    }
}