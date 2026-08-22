/*
Type Annotation cho Đối tượng phức tạp & Hàm Callback
Khai báo biến userManager có kiểu đối tượng với cấu trúc sau bằng Type Annotation trực tiếp (inline type annotation):

Thuộc tính admin: boolean.

Thuộc tính tags: mảng chuỗi.

Thuộc tính fetchUser: một hàm nhận vào id (number) và trả về một Promise chứa chuỗi tên người dùng.

Phương thức onStatusChange: nhận vào một callback (status: string) => void và trả về void.
*/
const userManager: {
    admin: boolean;
    tags: string[];
    fetchUser: (id: number) => Promise<string>;
    onStatusChange: (callback: (status: string) => void) => void;
} = {
    admin: true,
    tags: ["security", "developer"],
    fetchUser: async (id: number) => `User_${id}`,
    onStatusChange: (callback) => {
    callback("ONLINE");
  }
}