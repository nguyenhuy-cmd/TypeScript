/*
Khóa chặt Object cấu hình và chống Mutation
Xét đối tượng cấu hình điều hướng:

TypeScript
const ROUTE_CONFIG = {
  home: "/",
  login: "/auth/login",
  dashboard: {
    overview: "/admin/overview",
    settings: "/admin/settings",
  },
} as const;
Yêu cầu:

Xác định kiểu suy luận của ROUTE_CONFIG.home.

Xác định kiểu suy luận của ROUTE_CONFIG.dashboard.overview.

Thử thực hiện lệnh gán: ROUTE_CONFIG.home = "/index"; và quan sát thông báo lỗi của TypeScript.
*/
// 1.Kiểu suy luận của ROUTE_CONFIG.home là "/";
// 2.Kiểu suy luận của ROUTE_CONFIG.dashboard.overview là: "/admin/overview"'
// 3.Nó sẽ không thể làm thay đổi được vì đã có as const rồi