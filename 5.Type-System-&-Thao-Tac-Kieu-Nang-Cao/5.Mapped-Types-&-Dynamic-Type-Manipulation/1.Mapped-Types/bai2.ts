/*
Biến đổi giá trị kiểu dữ liệu (Value Transformation)
Trong các kiến trúc Reactive State (như Redux hoặc Vue), trạng thái thường được bọc bởi các hàm 
setter/getter hoặc các luồng sự kiện:

Cho interface trạng thái dữ liệu:

TypeScript
interface AppState {
  theme: "light" | "dark";
  sidebarOpen: boolean;
  volume: number;
}
Yêu cầu:

Viết Mapped Type ToAsyncGetters<T> sao cho mỗi thuộc tính P trong T được biến đổi thành một hàm trả về 
một Promise chứa kiểu của thuộc tính đó: () => Promise<T[P]>.

Khởi tạo một đối tượng cụ thể const stateGetters: ToAsyncGetters<AppState> để kiểm chứng việc suy luận 
kiểu.
*/
interface AppState {
  theme: "light" | "dark";
  sidebarOpen: boolean;
  volume: number;
}

type ToAsyncGetters<T> = {[P in keyof T] : () => Promise<T[P]>};

const stateGetters: ToAsyncGetters<AppState> = {
    theme: async () => "light",
    sidebarOpen: async () =>  true,
    volume: async () => 75
}