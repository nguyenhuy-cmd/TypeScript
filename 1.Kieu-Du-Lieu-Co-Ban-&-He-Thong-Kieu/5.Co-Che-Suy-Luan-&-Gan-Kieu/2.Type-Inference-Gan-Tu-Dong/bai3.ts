/*
Suy luận kiểu trả về của Hàm (Return Type Inference)
Xét hai hàm sau:

TypeScript
function processResponse(statusCode: number) {
  if (statusCode === 200) {
    return { success: true, data: "Loaded" };
  }
  if (statusCode === 404) {
    return { success: false, error: "Not Found" };
  }
  return null;
}

function calculateAverage(numbers: number[]) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}
Yêu cầu:

Xác định kiểu trả về mà TypeScript tự động suy luận cho hàm processResponse và calculateAverage.

Kiểm tra tính an toàn: Khi gọi processResponse(200), tại sao ta không thể truy cập ngay thuộc tính result.data mà không kiểm tra điều kiện?
*/
/*
1. kiểu của processResponse là object | null,
kiểu của calculateAverage là number
2. Vì TypeScript không biết chắc chắn processResponse(200) sẽ trả về object có data
*/