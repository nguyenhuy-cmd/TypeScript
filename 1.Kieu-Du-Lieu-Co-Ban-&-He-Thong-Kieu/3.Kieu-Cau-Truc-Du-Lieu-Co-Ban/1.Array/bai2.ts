/*
Nhận biết phương thức hợp lệ trên mảng readonly
Cho hàm nhận vào một danh sách ID chỉ đọc:

TypeScript
function processIdentifiers(ids: readonly number[]) {
  // Dòng nào sau đây sẽ bị TypeScript báo lỗi compile-time?
  ids.push(999);
  const doubled = ids.map((id) => id * 2);
  ids[0] = 100;
  const filtered = ids.filter((id) => id > 10);
  ids.sort();
}
Yêu cầu: Chỉ ra các dòng code gây lỗi và giải thích tại sao các hàm như .map() 
hay .filter() lại hợp lệ.
*/
/* Dòng gây ra là: ids.push(999);, ids[0] = 100;, ids.sort(); vì chúng đều làm 
thay đổi dữ liệu gốc
*/

/*
Các hàm như .map() và .fillter() hợp lệ vì chúng không làm thay đổi dữ liệu gốc 
*/