/*
Phân tích mã JavaScript Runtime được sinh ra
Cho class sau:

TypeScript
class ServerConfig {
  constructor(
    public readonly host: string,
    private port: number = 8080,
    protected isSecure: boolean = false
  ) {}
}
Yêu cầu:

Viết đoạn mã JavaScript thuần được TypeScript sinh ra cho class ServerConfig.

Cho biết điều gì xảy ra nếu lập trình viên quên không gắn modifier (ví dụ viết constructor(host: string))?
*/
class ServerConfig {
    host; 
    port;
    isSecure;
    constructor(host: string, port = 8000, isSecure = false){
        this.host = host;
        this.port = port;
        this.isSecure = isSecure;
    }
}
// khi không gắn mobifier thì host lúc này chỉ là parameter bình thường, không phải property của class.