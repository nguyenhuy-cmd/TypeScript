/*
Gộp các Object Shapes cơ bản (Mixins Pattern)
Xây dựng mô hình thực thể người dùng trong hệ thống:

Cho các kiểu thành phần:

TypeScript
type Identifiable = {
  id: string;
  createdAt: Date;
};

type ContactInfo = {
  email: string;
  phoneNumber?: string;
};

type UserProfile = {
  displayName: string;
  avatarUrl: string;
};
Tạo kiểu FullUserAccount bằng cách dùng toán tử & kết hợp 3 kiểu trên.

Khởi tạo một biến currentUser: FullUserAccount và kiểm tra việc thiếu một 
thuộc tính bất kỳ (ví dụ thiếu displayName) để quan sát phản hồi từ compiler.
*/
type Identifiable = {
  id: string;
  createdAt: Date;
};

type ContactInfo = {
  email: string;
  phoneNumber?: string;
};

type UserProfile = {
  displayName: string;
  avatarUrl: string;
};
type FullUserAccount = Identifiable & ContactInfo & UserProfile;

const currentUser: FullUserAccount = {
  id: "001",
  createdAt: new Date(),
  email: "nguyenhuy140923@gmail.com",
  phoneNumber: "0355494014",
  displayName: "Nguyeenx Huy",
  avatarUrl: "avatar.jpg,"
}