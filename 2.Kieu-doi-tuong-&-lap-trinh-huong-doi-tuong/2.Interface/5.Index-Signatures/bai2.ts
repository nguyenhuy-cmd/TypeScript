/*
Xử lý lỗi xung đột kiểu giữa thuộc tính cố định và Index Signature
Xét đoạn mã sau:

TypeScript
// Gây lỗi biên dịch:
interface ProductInventory {
  [productSku: string]: number;
  warehouseName: string; // Lỗi: Property 'warehouseName' of type 'string' is not assignable to 'string' index type 'number'.
  totalItems: number;
}
Yêu cầu:

Giải thích tại sao thuộc tính warehouseName lại gây ra lỗi biên dịch.

Trình bày 2 cách giải quyết lỗi trên 
(Cách 1: mở rộng Union type cho Index Signature; 
Cách 2: tách riêng thông tin kho hàng và danh sách sản phẩm).
*/ 
interface ProductInventory {
  [productSku: string]: number | string;
  warehouseName: string; // Lỗi: Property 'warehouseName' of type 'string' is not assignable to 'string' index type 'number'.
  totalItems: number;
}