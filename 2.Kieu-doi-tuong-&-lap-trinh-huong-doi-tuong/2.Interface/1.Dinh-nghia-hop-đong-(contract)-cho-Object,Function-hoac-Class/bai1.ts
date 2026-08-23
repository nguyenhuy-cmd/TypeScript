/*
Định nghĩa hợp đồng cho Hàm (Callable Interface)
Ngoài việc định nghĩa Object, interface có thể đại diện cho một chữ ký hàm có thể gọi được (callable):

Tạo interface MathOperation nhận vào hai tham số số (a: number, b: number) và trả về kiểu number.

Tạo một phiên bản mở rộng interface AdvancedOperation extends MathOperation có thêm thuộc tính mô tả: description: string.

Khai báo một hàm tính lũy thừa tuân thủ theo AdvancedOperation.
*/
interface MathOperation {(
    a: number,
    b: number
): number
}

interface AdvancedOperation extends MathOperation {
    description: string
}

const tinhLuyThua: AdvancedOperation = (a: number, b: number) => {
    return Math.pow(a,b);
}
tinhLuyThua.description = "Tính lũy thừa";
console.log(tinhLuyThua(2,3));
console.log(tinhLuyThua(3,4));
