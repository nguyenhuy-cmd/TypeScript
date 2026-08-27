/*
Định kiểu this cho Event Handler và DOM Manipulation
Xét việc lắng nghe sự kiện DOM:

Viết hàm handleButtonClick(this: HTMLButtonElement, event: MouseEvent): void:

Lấy thuộc tính this.disabled và chuyển thành true.

Đọc thuộc tính this.textContent và in ra log: "Button [text] was clicked at coordinates (x, y)".

Giả sử ta có một đối tượng nút bấm HTML và một thẻ div:

TypeScript
const button = document.createElement("button");
const div = document.createElement("div");
Thử gắn handleButtonClick vào button.addEventListener và div.addEventListener. Dự đoán dòng nào sẽ bị TypeScript chặn lỗi compile-time.
*/
function handleButtonClick(this: HTMLButtonElement, event: MouseEvent){
    this.disabled = true;
    console.log(`
        Nút "${this.textContent}" đã được nhất tại (${event.clientX}, ${event.clientY})
        `);
}
const button = document.createElement("button");
const div = document.createElement("div");
button.addEventListener("click", handleButtonClick)// hợp lệ

/*
div.addEventListener("click", handleButtonClick)// không hợp lệ
*/