/*
Lấy danh sách tên khóa (Key) bằng Object.keys
Một lập trình viên muốn lấy danh sách tất cả các tên trạng thái trong Enum sau để render lên dropdown:

TypeScript
enum Priority {
  Low,
  Medium,
  High
}

// Lập trình viên viết:
const keys = Object.keys(Priority);
console.log(keys); 
// Kết quả in ra: ['0', '1', '2', 'Low', 'Medium', 'High']
Yêu cầu:

Giải thích vì sao mảng keys lại chứa cả các chuỗi số ('0', '1', '2').

Viết hàm getEnumKeyNames(enumObj: object): string[] để lọc và chỉ trả về mảng chứa đúng các tên khóa dạng chữ (['Low', 'Medium', 'High']).
*/
enum Priority {
  Low,
  Medium,
  High
}

function getEnumKeyNames(enumObj: object): string[]{
    const keys = Object.keys(enumObj).filter(key => isNaN(Number(key)))
    return keys
}
console.log(getEnumKeyNames(Priority));

