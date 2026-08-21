/*
Bắt lỗi an toàn trong khối try...catch
Trong TypeScript (với cờ useUnknownInCatchVariables), biến error trong khối catch luôn mặc định có kiểu unknown.

TypeScript
function fetchUserData() {
  try {
    // Giả lập code ném ra ngoại lệ bất kỳ
    throw new Error("Network timeout");
  } catch (error: unknown) {
    // Viết hàm xử lý lấy message từ error ở đây
    const message = getErrorMessage(error);
    console.error(message);
  }
}
Yêu cầu:

Viết hàm getErrorMessage(error: unknown): string.

Nếu error là một instanceof Error, trả về error.message.

Nếu error là một string, trả về chính chuỗi đó.

Nếu error là đối tượng có chứa thuộc tính message dạng chuỗi (dùng toán tử in), trả về thuộc tính đó.

Các trường hợp khác (hoặc error không xác định), trả về "Unknown error occurred".
*/
function getErrorMessage(error: unknown): string {

  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return String(error.message);
  } else {
    return "Unknown error occurred";
  }
}    
