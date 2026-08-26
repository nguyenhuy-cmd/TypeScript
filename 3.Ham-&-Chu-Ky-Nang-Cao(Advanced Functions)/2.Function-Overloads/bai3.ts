/*
Overload với số lượng tham số và kiểu callback khác nhau
Xây dựng API truy vấn cơ sở dữ liệu giả lập dbQuery:

Chữ ký 1: dbQuery(query: string): Promise<string[]> (Chạy query không kèm tham số).

Chữ ký 2: dbQuery(query: string, params: Record<string, unknown>): Promise<string[]> (Chạy query kèm tham số bind).

Chữ ký 3: dbQuery(query: string, callback: (result: string[]) => void): void (Chạy query bất đồng bộ qua callback truyền thống).

Yêu cầu:

Viết implementation signature và thân hàm dbQuery để xử lý chính xác cả 3 trường hợp trên.
*/

function dbQuery(query: string): Promise<string[]>;
function dbQuery(query: string, params: Record<string, unknown>): Promise<string[]>;
function dbQuery(query: string, callback: (result: string[]) => void): void;

function dbQuery(query: string, arg2?: Record<string, unknown> | ((result: string[]) => void)):
Promise<string[]> | void {
    const dummyData = [`Kết quả cho: ${query}`];
    
    // Kiểm tra nếu tham số thứ 2 là callback
    if(typeof arg2 === "function"){
        arg2(dummyData);
        return;
    }

    // Nếu tham số 2 là pramas hoặc không truyền
    if(arg2){
        console.log(`Các tham số truy vấn đã được áp dụng: ${arg2}`);
    }
    return Promise.resolve(dummyData);
}

//Kiểm thử
dbQuery("SELECT * FROM users").then((res) => console.log(res));
dbQuery("SELECT * FROM users WHERE id = :id", { id: 101 }).then((res) => console.log(res));
dbQuery("SELECT * FROM users", (res) => console.log("Callback:", res));