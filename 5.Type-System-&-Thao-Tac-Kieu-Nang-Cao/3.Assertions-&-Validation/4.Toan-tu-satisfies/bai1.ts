/*
So sánh satisfies và Type Annotation (:)
Xét cấu hình bảng màu giao diện hỗ trợ mã màu dạng HEX (string) hoặc RGB (mảng số):

TypeScript
type RGB = [number, number, number];
type Color = string | RGB;
type Theme = Record<"primary" | "secondary" | "accent", Color>;
Cho 2 cách khai báo:

TypeScript
// Cách 1: Dùng Type Annotation
const themeA: Theme = {
  primary: "#007bff",
  secondary: [108, 117, 125],
  accent: "#ffc107",
};

// Cách 2: Dùng satisfies
const themeB = {
  primary: "#007bff",
  secondary: [108, 117, 125],
  accent: "#ffc107",
} satisfies Theme;
Yêu cầu:

Thử gọi themeA.primary.toUpperCase(). Quan sát và giải thích lý do TypeScript báo lỗi.

Thử gọi themeB.primary.toUpperCase() và themeB.secondary.map(...). 
Giải thích vì sao TypeScript cho phép.
*/
type RGB = [number, number, number];
type Color = string | RGB;
type Theme = Record<"primary" | "secondary" | "accent", Color>;

const themeA: Theme = {
  primary: "#007bff",
  secondary: [108, 117, 125],
  accent: "#ffc107",
};

// 1. themeA.primary bị lỗi:
// themeA.primary.toUpperCase();
// Lỗi: Property 'toUpperCase' does not exist on type 'Color'. Property 'toUpperCase' does not exist on type 'RGB'.
// Giải thích: Với `themeA: Theme`, kiểu của primary bị nới rộng thành union 'string | RGB'. Compiler không chắc nó là string hay mảng.

const themeB = {
  primary: "#007bff",
  secondary: [108, 117, 125],
  accent: "#ffc107",
} satisfies Theme;

// 2. themeB hoàn toàn hợp lệ:
console.log(themeB.primary.toUpperCase()); // "#007BFF"
console.log(themeB.secondary.map((c) => c * 2)); // [216, 234, 250]
// Giải thích: satisfies kiểm tra xem themeB có đủ các key của Theme không. Sau khi kiểm tra xong,
// nó giữ nguyên kiểu cụ thể: primary là string, secondary là [number, number, number].