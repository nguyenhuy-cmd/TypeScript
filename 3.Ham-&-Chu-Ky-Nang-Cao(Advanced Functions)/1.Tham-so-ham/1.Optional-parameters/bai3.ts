/*
Optional Parameter trong Hàm Callback / Higher-Order Functions
Khi viết hàm nhận callback có tham số tùy chọn:

Viết hàm fetchData(url: string, onComplete?: (status: number, message?: string) => void): void.

Yêu cầu:

Nếu không truyền callback onComplete, in ra "Fetching from <url> without completion callback".

Nếu có truyền onComplete, gọi callback với mã 200 và thông điệp "Data loaded successfully".

Thử gọi hàm fetchData theo 3 cách:

Không truyền callback.

Callback chỉ nhận status.

Callback nhận cả status và message.
*/
function fetchData(url: string, onComplete?: (status: number, message?: string) => void): void{
    if(onComplete === undefined){
        console.log(`Fetching from ${url} without completion callback`);
    }else{
        onComplete(200, "Data loaded successfully");
    }
}
// 1. Không truyền callback
fetchData("https://api.example.com/users");

// 2. Callback chỉ quan tâm đến tham số đầu tiên (TypeScript cho phép bỏ qua tham số phía sau)
fetchData("https://api.example.com/posts", (status) => {
  console.log(`Done with status: ${status}`);
});

// 3. Callback nhận đủ cả 2 tham số
fetchData("https://api.example.com/auth", (status, msg) => {
  console.log(`Result: [${status}] ${msg}`);
});