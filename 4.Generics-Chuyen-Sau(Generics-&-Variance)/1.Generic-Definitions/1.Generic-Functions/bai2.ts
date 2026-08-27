/*
Generic Function với Callbacks (Chuyển đổi dữ liệu)
Viết một hàm generic giả lập phương thức .map() của Array:

Định nghĩa hàm transformArray<T, R>(items: T[], transformer: (item: T, index: number) => R): R[].

Yêu cầu:

Duyệt qua từng phần tử của mảng items, áp dụng hàm transformer, và gom kết quả vào một mảng mới kiểu R[].

Thử nghiệm chuyển đổi một mảng các số nguyên [1, 2, 3, 4] thành mảng các chuỗi định dạng tiền tệ ["$1", "$2", "$3", "$4"].
*/
function transformArray<T, R>(items: T[], transformer: (item: T, index: number) => R): R[]{
    const result: R[]  = [];
    for(let i = 0; i < items.length; i++){
        result.push(transformer(items[i], i))
    }
    return result;
}

// Kiểm thử
const numbers = [1,2,3,4,5];
const formatted = transformArray(numbers, (item) => `$${item}`);
console.log(formatted);
console.log(formatted.join(" - "));

