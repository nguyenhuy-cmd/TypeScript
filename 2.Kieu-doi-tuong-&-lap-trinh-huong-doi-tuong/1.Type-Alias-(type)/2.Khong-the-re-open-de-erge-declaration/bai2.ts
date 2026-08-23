/*
Tình huống mở rộng Global Type của bên thứ ba
Giả sử bạn cần thêm thuộc tính analyticsToken vào đối tượng toàn cục Window trong ứng dụng trình duyệt:

TypeScript
// Thử nghiệm 1:
type Window = {
  analyticsToken: string;
};

// Thử nghiệm 2:
interface Window {
  analyticsToken: string;
}
Yêu cầu: Giải thích tại sao Thử nghiệm 1 thất bại nhưng Thử nghiệm 2 lại thành công trong việc mở rộng 
đối tượng có sẵn của TypeScript/DOM.
*/
// interface có thể viết thêm thuộc tính vào 