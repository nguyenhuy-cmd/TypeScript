/*
Hóa giải Excess Property Checks một cách an toàn
Có những tình huống một cấu hình cần chấp nhận thêm các metadata tùy biến từ người dùng mà 
không bị compiler chặn.

Cho interface:

TypeScript
interface PluginMetadata {
  name: string;
  version: string;
}
Yêu cầu:

Thêm Index Signature vào PluginMetadata để cho phép chứa thêm bất kỳ thuộc tính tùy ý nào khác 
mà không làm mất type-check của name và version.

Khởi tạo một đối tượng trực tiếp theo interface vừa sửa gồm name, version, và các thuộc tính 
phụ như author: "Dev", isBeta: true.
*/
interface PluginMetadata {
  name: string;
  version: string;
  [extraProp: string]: unknown; // Cho phép các thuộc tính mở rộng
}

// 2. khởi tạo truwch tiếp mà không bị lỗi
const myPluginMetadata: PluginMetadata = {
    name: "huy",
    version: "1.0.0",
    author: "Dev",
    isBeta: true
}
