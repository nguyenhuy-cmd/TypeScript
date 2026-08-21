/*
Hệ quả khi duyệt Enum bằng Object.entries
Một lập trình viên muốn in ra toàn bộ các cặp key-value của MixedResponse ở Bài 1:

TypeScript
Object.entries(MixedResponse).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
Yêu cầu:

Liệt kê chính xác những gì sẽ được in ra console.

Chỉ ra sự bất tiện/hỗn loạn của danh sách trên so với việc dùng pure string enum hoặc pure numeric enum.
*/
import { MixedResponse } from "./bai1";

/*
in ra:
0: No

1: Maybe

No: 0

Yes: YES

Maybe: 1
*/
/*
Hệ quả: Danh sách bị lặp lại dữ liệu của 0 và 1 (do reverse mapping), trong khi "YES" 
chỉ xuất hiện 1 lần. Điều này phá vỡ tính đồng nhất khi muốn lấy danh sách giá trị hoặc 
render dropdown trên giao diện.
*/