/*
Khai báo mảng Rest cơ bản & Tính toán động

Viết hàm calculateTotal(discount: number, ...prices: number[]): number:

discount: phần trăm giảm giá (ví dụ 0.1 là 10%).

prices: danh sách các mức giá sản phẩm truyền vào tùy ý.

Logic: Tính tổng tất cả các phần tử trong prices, sau đó áp dụng giảm giá và trả về số tiền cuối cùng.

Thử gọi hàm với các trường hợp: không truyền prices nào, truyền 1 giá trị, và truyền nhiều giá trị.
*/
function calculateTotal(discount: number, ...prices: number[]): number{
    const total = prices.reduce((sum, price) => sum + price, 0);
    const discountAmount = total * discount;

    return total - discountAmount;
}
console.log(calculateTotal(0,1,10,20,30,40,50));
