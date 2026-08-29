/*
Xây dựng hệ thống Logger/Validator chuẩn Đối biến
Thiết kế bộ so sánh dữ liệu Comparator:

Định nghĩa interface EqualityComparer<in T>:

Phương thức equals(a: T, b: T): boolean.

Viết hàm containsElement<T>(items: T[], target: T, comparer: EqualityComparer<T>): boolean:

Duyệt mảng items và trả về true nếu có phần tử thỏa mãn comparer.equals(item, target).

Tạo một comparer kiểm tra hai đối tượng có chung ID:

TypeScript
interface Entity {
  id: string;
}

interface UserAccount extends Entity {
  username: string;
  email: string;
}
Tạo entityComparer: EqualityComparer<Entity> và truyền nó vào hàm containsElement khi kiểm tra mảng UserAccount[].
*/
interface EqualityComparer<in T>{
    equals(a: T, b: T): boolean;
}

function containsElement<T>(items: T[], target: T, comparer: EqualityComparer<T>): boolean{
    for(const item of items){
        if(comparer.equals(item, target)){
            return true;
        }
    }

    return false;
}

interface Entity {
  id: string;
}

interface UserAccount extends Entity {
  username: string;
  email: string;
}
const entityComparer: EqualityComparer<Entity> = {
    equals:(a, b) => a.id === b.id,
};
const users: UserAccount[] = [
    {id: "U1", username: "alex", email: "alex@dev.to"},
    { id: "U2", username: "bella", email: "bella@dev.to" },
];
const targetUser: UserAccount = {id: "U1", username: "alex", email: "alex@dev.to"};

// Hợp lệ: EqualityComparer<Entity> được truyền trực tiếp cho mảng UserAccount (Contravariance)
const exists = containsElement(users, targetUser, entityComparer);
console.log(exists);
