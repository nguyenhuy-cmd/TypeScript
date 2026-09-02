/*
rích xuất kiểu phần tử mảng bằng T[number]
Xét danh sách quyền hạn và vai trò:

TypeScript
const APP_ROLES = ["admin", "editor", "viewer", "guest"] as const;

type RoleList = typeof APP_ROLES;
Yêu cầu:

Dùng RoleList[number] để tạo ra type Role. Xác định kiểu cụ thể của Role.

Cho kiểu mảng đối tượng:

TypeScript
type ProductCatalog = {
  sku: string;
  price: number;
  inStock: boolean;
}[];
Dùng Indexed Access để lấy ra kiểu của một phần tử Product duy nhất từ ProductCatalog.
*/
const APP_ROLES = ["admin", "editor", "viewer", "guest"] as const;

type RoleList = typeof APP_ROLES;
// 1. Trích xuất phần tử tuple/readonly array qua index số
type Role = RoleList[number];
// Kiểu cụ thể: "admin" | "editor" | "viewer" | "guest"

type ProductCatalog = {
  sku: string;
  price: number;
  inStock: boolean;
}[];

// 2. Lấy kiểu phần tử từ Array Type
type Product = ProductCatalog[number];// Product object