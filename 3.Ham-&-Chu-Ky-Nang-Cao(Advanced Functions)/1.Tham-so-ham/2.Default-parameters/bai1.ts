/*
Suy luận kiểu & Cơ chế kích hoạt giá trị mặc định
Xét hàm sau:

TypeScript
function configureApp(
  appName: string = "My App",
  port: number = 8080,
  isLive: boolean = true
) {
  console.log(`App: ${appName}, Port: ${port}, Live: ${isLive}`);
}
Yêu cầu: Xác định kết quả in ra màn hình khi gọi các lệnh sau:

configureApp();

configureApp("ShopAPI", undefined, false);

configureApp(undefined, 0, undefined);

configureApp(null as any, 3000, true);
*/
function configureApp(
  appName: string = "My App",
  port: number = 8080,
  isLive: boolean = true
) {
  console.log(`App: ${appName}, Port: ${port}, Live: ${isLive}`);
}
configureApp();// Nhận toàn bộ mặc định

configureApp("ShopAPI", undefined, false);// (Tham số thứ 2 truyền undefined nên kích hoạt mặc định 8080, false được giữ nguyên).

configureApp(undefined, 0, undefined);// Số 0 là giá trị hợp lệ của number, không phải undefined nên không bị ghi đè thành 8080

configureApp(null as any, 3000, true);// (null không kích hoạt giá trị mặc định).