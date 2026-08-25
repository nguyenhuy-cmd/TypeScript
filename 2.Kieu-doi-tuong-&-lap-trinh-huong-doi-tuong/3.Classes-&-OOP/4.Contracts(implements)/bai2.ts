/*
Tách biệt Contract và Constructor
Xét đoạn mã sau:

TypeScript
interface DatabaseConnection {
  connectionString: string;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
Yêu cầu:

Xây dựng class PostgresConnection implements DatabaseConnection:

Nhận connectionString: string và timeoutMs: number trong constructor.

Thêm một phương thức nội bộ private validateConnection(): boolean.

Cài đặt connect() và disconnect().

Giải thích tại sao interface DatabaseConnection không thể (và không nên) ràng buộc cấu trúc của hàm constructor.
*/
interface DatabaseConnection {
    connectionString: string;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
class PostgresConnection implements DatabaseConnection {
    public connectionString: string;
    public timeoutMs: number;
    private validateConnection(): boolean {
        return this.connectionString.length > 0;
    }

    constructor(connectionString: string, timeoutMs: number) {
        this.connectionString = connectionString;
        this.timeoutMs = timeoutMs;
    }
    public async connect(): Promise<void> {
        console.log(`oke`);
    }

    public async disconnect(): Promise<void> {
        console.log(`Disconnected`);
    }

}