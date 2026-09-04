import { OrderStatus } from './../../../1.Kieu-Du-Lieu-Co-Ban-&-He-Thong-Kieu/4.Enums/2.String-Enum/bai1';
/*
Phân biệt các chuỗi định danh (IDs) khác nhau
Trong hệ thống bán hàng, cả mã khách hàng (UserId) và mã đơn hàng (OrderId) đều là string:

Tạo utility generic Brand<T, B>:

TypeScript
declare const brand: unique symbol;
type Brand<T, B> = T & { readonly [brand]: B };
Định nghĩa hai kiểu:

type UserId = Brand<string, "UserId">;

type OrderId = Brand<string, "OrderId">;

Viết hai smart constructor:

function makeUserId(id: string): UserId

function makeOrderId(id: string): OrderId

Viết hàm cancelOrder(orderId: OrderId, requestedBy: UserId): void.

Thử truyền nhầm UserId vào vị trí của orderId và quan sát phản hồi từ compiler.
*/
declare const brand: unique symbol;
type Brand<T, B> = T & { readonly [brand]: B };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

function makeUserId(id: string): UserId{
    return id as UserId;
}

function makeOrderId(id: string): OrderId{
    return id as OrderId;
}
function cancelOrder(orderId: OrderId, requestedBy: UserId): void{
    console.log(
    `Ở đây có ${orderId} và ${requestedBy}`);
}
const userID = makeUserId("Hut01");
const orderID = makeOrderId("Huy02");

cancelOrder(orderID, userID );// hợp lệ
//cancelOrder(userID, orderID);// Không hợp lệ