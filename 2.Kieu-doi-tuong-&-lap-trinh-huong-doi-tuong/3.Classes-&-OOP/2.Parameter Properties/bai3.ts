/*
Xây dựng hệ thống Dependency Injection (DI) với Parameter Properties
Trong kiến trúc backend hiện đại (như NestJS hoặc Angular), Parameter Properties là tiêu chuẩn để inject các service/phụ thuộc vào controller:

Định nghĩa interface EmailService có phương thức send(to: string, msg: string): void.

Định nghĩa interface DatabaseService có phương thức save(data: object): Promise<boolean>.

Tạo class AuthService sử dụng Parameter Properties để inject trực tiếp các dependencies trong constructor:

emailService: private readonly kiểu EmailService.

dbService: private readonly kiểu DatabaseService.

tokenExpiry: public readonly kiểu number (có giá trị mặc định là 3600).

Thêm phương thức public async register(email: string): Promise<void> để gọi gửi mail và lưu database.
*/
interface EmailService{
    send(to: string, msg: string): void
}
interface DatabaseService{
    save(data: object): Promise<boolean>;
}
class AuthService {
    constructor(
        private readonly emailService:  EmailService,
        private readonly dbService: DatabaseService,
        public readonly tokenExpiry: number = 3600,
    ){}
    public async register(email: string): Promise<void>{
        await this.dbService.save({email, createdAt: new Date()});
        this.emailService.send(email, "Chào mừng bạn đến với hệ thống của chúng tôi!");
        console.log(`Đã đăng ký ${email}. Mã thông báo có hiệu lực trong ${this.tokenExpiry} giây.`);
        
    }
}

// Kiểm tra mô phỏng
const mockEmailService: EmailService = {
    send: (to, msg) => console.log(`[Mail to ${to}]: ${msg}`),
};

const mockDbService: DatabaseService = {
    save: async (data) => true,
}

const auth = new AuthService(mockEmailService, mockDbService);
auth.register("alex@example.com");