/*
Custom Type Guard cơ bản với Object Interface
Xét mô hình xử lý file đính kèm:

Định nghĩa hai interface:

TypeScript
interface ImageAttachment {
  url: string;
  width: number;
  height: number;
}

interface DocumentAttachment {
  url: string;
  pageCount: number;
  fileSize: number;
}

type Attachment = ImageAttachment | DocumentAttachment;
Viết hàm guard isImageAttachment(file: Attachment): file is ImageAttachment:

Kiểm tra sự tồn tại của thuộc tính width trong file.

Viết hàm renderAttachment(file: Attachment): string:

Dùng if (isImageAttachment(file)) để render "Image: [width]x[height]".

Ở nhánh else, truy cập trực tiếp file.pageCount mà không cần ép kiểu để in ra "Document: [pageCount] pages".
*/
interface ImageAttachment {
  url: string;
  width: number;
  height: number;
}

interface DocumentAttachment {
  url: string;
  pageCount: number;
  fileSize: number;
}

type Attachment = ImageAttachment | DocumentAttachment;

// Bộ kiểm tra kiểu tùy chỉnh
function isImageAttachment(file: Attachment): file is ImageAttachment{
    return "width" in file;
}

function renderAttachment(file: Attachment): string{
    if (isImageAttachment(file)){
        return `Image: ${file.width}x${file.height}`
    }
    // Nhánh else: TypeScript tự động hiểu file là DocumentAttachment
  return `Document: ${file.pageCount} pages, size: ${file.fileSize}KB`;
}

// Kiểm tra 
const img: Attachment = { url: "a.png", width: 1920, height: 1080 };
const doc: Attachment = { url: "report.pdf", pageCount: 12, fileSize: 2048 };

console.log(renderAttachment(img)); // "Image: 1920x1080"
console.log(renderAttachment(doc)); // "Document: 12 pages, size: 2048KB"