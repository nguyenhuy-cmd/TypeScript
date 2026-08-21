/*
type Point = [number, number];
const p: Point = [10, 20];

p.push(30); // Dòng này có báo lỗi compile-time không?
console.log(p); // Output thực tế tại runtime là gì?
*/
/*
- Giải thích hành vi mặc định của TypeScript với phương thức .push() trên Tuple 
thông thường: vẫn chạy được nhé
*/
// Sửa:
type Point = readonly [number, number];
const p: Point = [10, 20];

//p.push(30); // Dòng này có báo lỗi compile-time không?
//console.log(p); // Output thực tế tại runtime là gì?