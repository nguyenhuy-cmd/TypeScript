/*
Abstract Property và Kế thừa đa tầng
Thiết kế hệ thống thông báo đa nền tảng:

Định nghĩa abstract class BaseNotifier:

Thuộc tính trừu tượng abstract readonly channelName: string.

Phương thức trừu tượng abstract deliver(message: string): Promise<boolean>.

Phương thức cụ thể public async send(message: string): Promise<void>:

In ra log: [CHANNEL: <channelName>] Sending message: <message>

Gọi hàm deliver(message) và in trạng thái gửi thành công/thất bại.

Xây dựng class SlackNotifier kế thừa BaseNotifier:

Gán channelName = "SLACK".

Khởi tạo nhận vào webhookUrl: string bằng Parameter Properties.

Cài đặt phương thức deliver in ra thông điệp gửi tới webhook tương ứng.
*/
abstract class BaseNotifier{
    abstract readonly channelName: string;
    abstract deliver(message: string): Promise<boolean>
    public async send(message: string): Promise<void>{
         console.log(`[CHANNEL: ${this.channelName}] Sending message: ${message}`);
         const success = await this.deliver(message);
         if(success){
            console.log(`Gửi tin nhắn thành công`);
         }else{
            console.log(`Gửi tin nhắn thất bại`);
         }
    }
    }
class SlackNotifier extends BaseNotifier{
    readonly channelName = "SLACK";
    constructor(private readonly webhookUrl: string){
        super();
    }
    async deliver(message: string): Promise<boolean>{
        console.log(`[WEBHOOK: ${this.webhookUrl}] ${message}`);
        return true;
    };
}