/*
Exhaustive Checking khi mở rộng Union
Xét trạng thái đơn hàng trong hệ sinh thái E-commerce:

TypeScript
type PendingOrder = { status: "pending"; createdAt: Date };
type ShippedOrder = { status: "shipped"; trackingNumber: string };
type DeliveredOrder = { status: "delivered"; deliveredAt: Date };

type Order = PendingOrder | ShippedOrder | DeliveredOrder;
Viết hàm hỗ trợ assertUnreachable(x: never): never: Ném ra lỗi runtime.

Viết hàm getOrderStatusDescription(order: Order): string dùng switch (order.status) và gọi assertUnreachable(order) ở nhánh default.

Sau đó, thêm một kiểu mới type CancelledOrder = { status: "cancelled"; reason: string }; vào Order (type Order = ... | CancelledOrder;).

Mô tả lỗi chính xác mà TypeScript báo tại nhánh default nếu bạn chưa thêm case "cancelled".
*/
type PendingOrder = { status: "pending"; createdAt: Date };
type ShippedOrder = { status: "shipped"; trackingNumber: string };
type DeliveredOrder = { status: "delivered"; deliveredAt: Date };
type CancelledOrder = { status: "cancelled"; reason: string };
type Order = PendingOrder | ShippedOrder | DeliveredOrder | CancelledOrder;

function assertUnreachable(x: never): never{
    throw new Error(`Giá trị không mong đợi: ${x}`)
}

function getOrderStatusDescription(order: Order): string{
    switch (order.status){
        case "pending":
            return "1";

        case "shipped":
            return "2";

        case "delivered":
            return "3"
        default:
            return assertUnreachable(order);    
    }
}
// Sẽ báo lỗi: Argument of type 'CancelledOrder' is not assignable to parameter of type 'never'.