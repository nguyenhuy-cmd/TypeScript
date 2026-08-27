/*
Đa ràng buộc và Kế thừa Constraint trong Class
Xây dựng hệ thống so sánh đối tượng:

Định nghĩa interface Comparable<T> có phương thức compareTo(other: T): number (trả về số âm nếu nhỏ hơn, 0 nếu bằng, số dương nếu lớn hơn).

Định nghĩa interface Printable có phương thức toString(): string.

Viết hàm findMax<T Comparable<T extends> & Printable>(items: T[]): T | null:

Nếu mảng rỗng, trả về null.

Tìm và in ra phần tử lớn nhất trong mảng bằng cách kết hợp phương thức compareTo và toString.

Xây dựng class Box implements Comparable<Box>, Printable chứa thuộc tính volume: number để kiểm thử hàm findMax.
*/
interface Comparable<T>{
    compareTo(other: T): number;
}

interface Printable{
    toString(): string;
}
function findMax<T extends Comparable<T> & Printable>(
    items: T[]
): T | null {
    if(items.length === 0){
        return null;
    }
    
    let max = items[0];

    for(const item of items){
        if(item.compareTo(max) > 0){
            max = item;
        }
    }
    console.log(max.toString());
    return max;
}
class Box implements Comparable<Box>, Printable{
    constructor(public volume: number){}
    compareTo(other: Box): number{
        return this.volume - other.volume;
    }

    toString(): string{
        return `Box(volume: ${this.volume})`;
    }
}
const boxes = [
    new Box(100),
    new Box(500),
    new Box(300)
];

const maxBox = findMax(boxes);

