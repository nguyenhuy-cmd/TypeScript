/*
Xây dựng Utility Type bằng Conditional Type (type)
Conditional Type cho phép tính toán kiểu dựa trên điều kiện T extends U ? X : Y.

Định nghĩa type NonNullableType<T>: Nếu T là null hoặc undefined thì loại bỏ, ngược lại giữ nguyên kiểu ban đầu.

Định nghĩa type Flatten<T>: Nếu T là một mảng (T extends Array<infer Item>), trích xuất kiểu phần tử Item bên trong mảng đó; 
nếu không phải mảng thì giữ nguyên T.
*/
type NonNullableType<T> = T extends null | undefined ? never : T;
type Flatten<T> = T extends Array<infer Item> ? Item : T