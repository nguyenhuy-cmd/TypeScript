/*
Kế thừa đa interface (Multiple Interface Inheritance)
Xây dựng mô hình thiết bị thông minh kết hợp nhiều chức năng:

Định nghĩa interface Printable: có phương thức print(): void.

Định nghĩa interface Scannable: có phương thức scan(): string.

Định nghĩa interface SmartPrinter extends Printable, Scannable: bổ sung thêm thuộc tính networkIp: string.

Viết một đối tượng officeDevice thỏa mãn kiểu SmartPrinter.
*/
interface Printable{
    print(): void;
}
interface Scannable{
    scan(): string;
}
interface SmartPrinter extends Printable, Scannable{
    networkIp: string
}
const officeDevice: SmartPrinter = {
    networkIp: "111.222.333",
    print(){
        console.log("Printing document...");
    },
    scan() {
        return "Scanned PDF content";   
    },
}
