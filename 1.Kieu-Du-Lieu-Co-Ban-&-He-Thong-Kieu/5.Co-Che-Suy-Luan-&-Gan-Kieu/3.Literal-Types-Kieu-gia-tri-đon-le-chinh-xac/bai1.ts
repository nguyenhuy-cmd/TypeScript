/*
Khai báo và kết hợp Union với Literal Types

Định nghĩa kiểu DiceRoll chỉ chấp nhận các số nguyên từ 1 đến 6.

Định nghĩa kiểu ThemeMode chỉ nhận 1 trong 3 giá trị: "light", "dark", hoặc "system".

Viết hàm setAppTheme(mode: ThemeMode): void để in ra chuỗi "App switched to <mode> mode".
*/
type DiceRoll = 1 | 2 | 3 | 4 | 5 |6;
type ThemeMode = "light" | "dark" | "system";

function setAppTheme(mode: ThemeMode): void {
    console.log(`App switched to ${mode} mode`);
    
}