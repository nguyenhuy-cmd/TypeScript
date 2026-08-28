/*
Kết hợp Constraint và Default Type (extends + =)

Xây dựng hàm xử lý DOM elements:

Viết hàm 
createDomElement<T HTMLElement="HTMLDivElement" extends>(tagName?: string): T:
    Nếu không truyền tagName, mặc định tạo thẻ div (document.createElement("div") as T).
    Nếu có tagName, tạo element tương ứng và ép kiểu về T.
    
Thử gọi hàm theo các trường hợp:
Không truyền type argument lẫn tham số runtime: 
const el1 = createDomElement(); $\rightarrow$ Kiểu trả về là gì?

Truyền type argument tường minh: 
const el2 = createDomElement<HTMLInputElement>("input"); => Kiểu trả về là gì?

Thử khai báo sai: createDomElement<number>() để quan sát lỗi từ TypeScript.
*/

function createDomElement<T extends HTMLElement = HTMLDivElement>(tagName: string = "div"): T{
    return document.createElement(tagName) as T;
}

// 1. không truyền type argument -> T mặc định là HTMLDivElement
const el1 = createDomElement();

// 2. Truyền tường minh HTMLInputElement
const el2 = createDomElement<HTMLInputElement>("input");
el2.value = "Hello"