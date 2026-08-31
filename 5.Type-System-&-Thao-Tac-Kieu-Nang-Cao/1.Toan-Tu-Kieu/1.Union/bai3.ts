/*
Xử lý Discriminated Union (Union có nhãn phân loại)
Xây dựng hệ thống trạng thái tải dữ liệu từ API:

Định nghĩa 3 trạng thái:

type LoadingState = { status: "loading" };

type SuccessState = { status: "success"; data: string[]; timestamp: number };

type ErrorState = { status: "error"; message: string; code: number };

Tạo Union type: type FetchState = LoadingState | SuccessState | ErrorState;

Viết hàm renderUI(state: FetchState): string dùng câu lệnh switch (state.status) 
để xử lý triệt để cả 3 trường hợp và trả về chuỗi hiển thị tương ứng.
*/
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string[]; timestamp: number };
type ErrorState = { status: "error"; message: string; code: number };
type FetchState = LoadingState | SuccessState | ErrorState;

function renderUI(state: FetchState): string{
    switch (state.status){
        case "loading":
            return "Loading data, please wait...";
        case "success":
            return `Loaded ${state.data.length} items at timestamp ${state.timestamp}`;
        case "error":
            return `Error [${state.code}]: ${state.message}`;    
    }
}

console.log(renderUI({status: "loading"}));
console.log(renderUI({status: "error", message: "oke", code: 111}));
console.log(renderUI({status: "error", message: "xin chào", code: 222}));


