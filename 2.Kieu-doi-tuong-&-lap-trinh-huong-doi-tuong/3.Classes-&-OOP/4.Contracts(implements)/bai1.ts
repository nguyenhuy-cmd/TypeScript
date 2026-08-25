/*
Ràng buộc tính hợp lệ của hợp đồng
Cho hai interface sau:

TypeScript
interface Loggable {
  logLevel: "INFO" | "WARN" | "ERROR";
  writeLog(message: string): void;
}

interface Serializable {
  serialize(): string;
}
Yêu cầu:

Xây dựng class SystemEvent thực thi (implements) đồng thời cả hai interface Loggable và Serializable.

Phân tích điều gì xảy ra nếu lập trình viên đổi private writeLog(...) hoặc quên cài đặt phương thức 
serialize().
*/
interface Loggable {
  logLevel: "INFO" | "WARN" | "ERROR";
  writeLog(message: string): void;
}

interface Serializable {
  serialize(): string;
}
class SystemEvent implements Loggable,Serializable{
    public logLevel: "INFO" | "WARN" | "ERROR";
    private eventData: Record<string, unknown>;

    constructor(loglevel: "INFO" | "WARN" | "ERROR", eventData: Record<string, unknown>){
        this.eventData = eventData;
        this.logLevel = loglevel;
    }
    public writeLog(message: string): void {
    console.log(`[${this.logLevel}] ${message}`);
  }

  public serialize(): string {
    return JSON.stringify({ level: this.logLevel, data: this.eventData });
  }
}

/*
Phân tích lỗi:

Nếu đổi writeLog thành private, TypeScript báo lỗi: 
Class 'SystemEvent' incorrectly implements interface 'Loggable'. 
Property 'writeLog' is private in type 'SystemEvent' but not in type 'Loggable'.

Nếu quên viết serialize(), TypeScript báo lỗi: 
Type 'SystemEvent' is missing the following properties from type 
'Serializable': serialize.
*/