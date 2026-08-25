/*
Chuyển đổi mã truyền thống sang Parameter Properties
Cho class được viết theo cách khai báo thuộc tính thông thường (boilerplate code):

TypeScript
class Product {
  public readonly id: string;
  public name: string;
  protected baseCost: number;
  private taxRate: number;

  constructor(id: string, name: string, baseCost: number, taxRate: number) {
    this.id = id;
    this.name = name;
    this.baseCost = baseCost;
    this.taxRate = taxRate;
  }
}
Yêu cầu: Viết lại toàn bộ class Product trên bằng cú pháp Parameter Properties ngắn 
gọn nhất mà vẫn giữ nguyên chính xác phạm vi truy cập và tính chất readonly.
*/
class Product{
    constructor(
        public readonly  id: string,
        public name: string,
        protected baseCost: number,
        private taxRate: number
    ){}
}