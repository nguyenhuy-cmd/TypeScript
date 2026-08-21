/*
Tính an toàn khi làm việc với API (Serialization)
Giả sử bạn nhận được payload JSON từ server có định dạng:

TypeScript
const apiResponse = '{"orderId": "ORD-123", "status": "SHIPPED"}';
Yêu cầu:

Định nghĩa interface OrderData sử dụng OrderStatus đã tạo ở Bài 1.

Viết hàm parseOrder(jsonStr: string): OrderData để parse chuỗi JSON.

Viết Type Guard function isValidOrderStatus(val: any): val is OrderStatus để xác thực xem giá trị chuỗi 
nhận từ API có thực sự nằm trong các giá trị của OrderStatus hay không trước khi gán.
*/
import { OrderStatus } from "./bai1";


const apiResponse = '{"orderId": "ORD-123", "status": "SHIPPED"}';
interface OrderData {
     orderId: string,
     status: OrderStatus 
}

function isValidOrderStatus(val: any): val is OrderStatus{
    return Object.values(OrderStatus).includes(val);
} 
function parseOrder(jsonStr: string): OrderData{
    const data = JSON.parse(jsonStr);

    if(!isValidOrderStatus(data.status)){
        throw new Error(`Trạng thái đơn hàng không hợp lệ`) 
    }
    
    return {
        orderId: data.orderId,
        status: data.status
    }
}

const order = parseOrder(apiResponse);
console.log(order);
console.log(order.orderId);
console.log(order.status);

