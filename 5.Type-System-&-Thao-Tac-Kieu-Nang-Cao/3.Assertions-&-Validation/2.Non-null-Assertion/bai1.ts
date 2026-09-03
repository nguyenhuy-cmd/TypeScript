/*
Non-null Assertion với DOM Selection
Trong thao tác DOM, các hàm truy vấn luôn trả về kiểu Element | null:

Xét đoạn mã:

TypeScript
const submitBtn = document.querySelector("#submit-btn");
Yêu cầu:

Cho biết kiểu của submitBtn khi chưa dùng !.

Sử dụng toán tử Non-null Assertion để bỏ qua cảnh báo của compiler và gọi phương thức addEventListener trực tiếp trên cùng dòng khai báo.

So sánh cách viết này với cú pháp Optional Chaining (submitBtn?.addEventListener(...)). Trường hợp nào an toàn hơn ở runtime?
*/
// 1.khi chưa dùng ! là: Element | null
const submitBtn = document.querySelector("#submit-btn")!;
submitBtn.addEventListener("click", () => {
    console.log("Đã click");
    
})

// 3. trường hợp submitBtn?.addEventListener(...)) an toàn hơn 