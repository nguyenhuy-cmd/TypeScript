/*
Tái hiện Partial<T> và Required<T> bằng Modifier Flags
Trong thư viện chuẩn của TypeScript, Partial<T> làm cho mọi thuộc tính thành tùy chọn, còn Required<T> làm cho mọi thuộc tính thành bắt buộc.

Cho interface:

TypeScript
interface UserProfile {
  id: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
}
Yêu cầu:

Tự viết Mapped Type MyPartial<T> dùng cờ ? để biến đổi toàn bộ thuộc tính của T thành optional.

Tự viết Mapped Type MyRequired<T> dùng cờ -? để loại bỏ toàn bộ tính tùy chọn khỏi T.

Áp dụng cả hai lên UserProfile và quan sát kiểu kết quả.
*/
interface UserProfile {
  id: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
}
type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyRequired<T> = {[K in keyof T]-?: T[K]};
