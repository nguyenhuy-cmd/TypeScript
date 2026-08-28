/*
Type-Safe Property Setter / Updater
Viết một hàm cập nhật giá trị thuộc tính cho đối tượng với độ an toàn kiểu tuyệt đối:

Định nghĩa hàm updateProperty<T, K T extends keyof>(obj: T, key: K, value: T[K]): T:

Nhận vào đối tượng obj, tên thuộc tính key và giá trị mới value tương ứng với kiểu của thuộc tính đó (T[K]).

Thực hiện gán obj[key] = value và trả về obj.

Cho đối tượng kiểm thử:

TypeScript
const user = {
  id: 101,
  username: "coder_pro",
  isActive: true,
};
Thử gọi hàm với các trường hợp:

Cập nhật username thành "new_coder".

Cập nhật isActive thành false.

Cập nhật id thành "202" (chuỗi). Quan sát và giải thích lỗi do TypeScript đưa ra.

Cập nhật thuộc tính không tồn tại "role". Quan sát lỗi.
*/
function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T{
    obj[key] = value;
    return obj;
}
const user = {
  id: 101,
  username: "coder_pro",
  isActive: true,
};
updateProperty(user, "id", 104); // hợp lệ
updateProperty(user, "username", "hi"); // hợp lệ

// updateProperty(user, "role", "Sếp"); Không hợp lệ
