/*
Gộp phương thức (Method Overloading qua Declaration Merging)
Cho hai khai báo của interface DocumentRenderer:

TypeScript
interface DocumentRenderer {
  render(content: string): void;
}

interface DocumentRenderer {
  render(content: number): void;
  render(content: "PDF"): boolean;
}
Yêu cầu:

Viết danh sách thứ tự ưu tiên của các chữ ký hàm render sau khi TypeScript thực hiện gộp interface.

Xây dựng class HtmlRenderer thực thi (implements) interface DocumentRenderer đã được gộp.
*/
interface DocumentRenderer {
  render(content: string): void;
}

interface DocumentRenderer {
  render(content: number): void;
  render(content: "PDF"): boolean;
}
class HtmlRenderer implements DocumentRenderer{
    render(content: number): void;
    render(content: "PDF"): boolean;
    render(content: string): void;

    render(content: number | string): void | boolean{
        if(content === "PDF"){
            console.log("PDF");
            return true;            
        }
        if(typeof content === "number"){
            console.log(`Number ${content}`);
        }
        if(typeof content === "string"){
            console.log(`String${content}`);
            
        }
    }
}
// Kiểm tra
const renderer = new HtmlRenderer();

renderer.render(123);