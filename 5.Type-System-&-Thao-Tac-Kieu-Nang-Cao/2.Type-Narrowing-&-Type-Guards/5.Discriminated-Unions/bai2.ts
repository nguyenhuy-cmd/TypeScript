/*
Discriminated Union với Generic Result Pattern (Result<T, E>)

Xây dựng cấu trúc kết quả trả về an toàn thay thế cho try/catch:

Định nghĩa generic type Result<T, E>:
type Success<T> = { ok: true; data: T };
type Failure<E> = { ok: false; error: E };
type Result<T, E="Error"> = Success<T> | Failure<E>;

Viết hàm divide(a: number, b: number): Result<number, string>:
Nếu $b = 0$, trả về { ok: false, error: "Division by zero" }.
Ngược lại trả về { ok: true, data: a / b }.

Viết hàm handleResult(res: Result<number, string>): void:
Dùng if (res.ok) để in ra kết quả hoặc log lỗi mà không cần ép kiểu.
*/
type Success<T> = { ok: true; data: T };

type Failure<E> = { ok: false; error: E };

type Result<T, E="Error"> = Success<T> | Failure<E>;

function divide(a: number, b: number): Result<number, string>{
    if(b === 0){
        return { ok: false, error: "Division by zero" }
    }else{
        return { ok: true, data: a / b }
    }
}

function handleResult(res: Result<number, string>): void{
    if(res.ok){
        console.log(`Kết quả: ${res.data}`);
    }else{
        console.log(`Lỗi: ${res.error}`);
    }
}