/*
Type Predicate kết hợp Array Filtering (.filter())
Trong JavaScript, việc lọc bỏ các giá trị null hoặc undefined khỏi mảng thường dùng .filter(Boolean) nhưng TypeScript mặc định vẫn giữ nguyên kiểu (T | null)[].

Cho mảng:

TypeScript
const rawList: (string | null | undefined)[] = ["alpha", null, "beta", undefined, "gamma"];
Viết một generic type guard:

TypeScript
function isDefined<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}
Dùng rawList.filter(isDefined) và kiểm tra kiểu suy luận của mảng kết quả thu được.
*/
const rawList: (string | null | undefined)[] = ["alpha", null, "beta", undefined, "gamma"];
function isDefined<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}

// Khi dùng isDefined với filter:
const cleanList = rawList.filter(isDefined);

// kiểm suy luận của cleanList  là string[] 
console.log(cleanList);
console.log(cleanList.map((s) => s.toUpperCase()));

