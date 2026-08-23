/*
Discriminated Union (Union phân biệt) dựa trên Literal Types
Tạo mô hình xử lý kết quả thao tác cơ sở dữ liệu:

Định nghĩa type SuccessResult = { status: "SUCCESS"; data: string[] }.

Định nghĩa type ErrorResult = { status: "ERROR"; errorMessage: string }.

Tạo Union Type type DbResult = SuccessResult | ErrorResult.

Viết hàm handleDbResult(res: DbResult): void:

Sử dụng thuộc tính literal status để rẽ nhánh bằng if/else hoặc switch-case.

In ra số lượng bản ghi nếu status === "SUCCESS" và in ra thông báo lỗi nếu status === "ERROR".
*/
type SuccessResult = { 
    status: "SUCCESS";
    data: string[]
    };
type ErrorResult = { 
    status: "ERROR";
    errorMessage: string 
};
type DbResult = SuccessResult | ErrorResult;
function handleDbResult(res: DbResult): void{
    if(res.status === "SUCCESS"){
        console.log(`ĐÃ tải thành công ${res.data.length} items successfully`);
    }else {
        console.log(`Thao tác thất bại ${res.errorMessage.length} `);
        
    }
}
handleDbResult({status: "SUCCESS", data: ["item1", "item2"]})
handleDbResult({ status: "ERROR", errorMessage: "Connection timed out" });