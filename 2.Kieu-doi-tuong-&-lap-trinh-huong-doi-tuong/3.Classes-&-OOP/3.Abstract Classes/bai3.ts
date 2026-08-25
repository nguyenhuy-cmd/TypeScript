/*
Áp dụng Template Method Pattern với Abstract Class
Xây dựng khung xử lý xuất hóa đơn báo cáo tài chính (ReportGenerator):

Định nghĩa abstract class ReportGenerator:

Phương thức trừu tượng protected abstract fetchData(): string[].

Phương thức trừu tượng protected abstract formatBody(data: string[]): string.

Phương thức cụ thể (Template Method) public generateReport(): string:

Ghép theo cấu trúc: Header (=== REPORT ===) + formatBody(this.fetchData()) + Footer (=== END ===).

Xây dựng class CsvReportGenerator kế thừa ReportGenerator:

fetchData(): Trả về mảng ["User A, 100$", "User B, 200$"].

formatBody(data): Nối các dòng dữ liệu bằng dấu xuống dòng \n.

Xây dựng class HtmlReportGenerator kế thừa ReportGenerator:

fetchData(): Trả về mảng ["User A", "User B"].

formatBody(data): Bọc các phần tử bên trong thẻ <ul> và <li>.
*/
abstract class ReportGenerator{
    protected abstract fetchData(): string[];
    protected abstract formatBody(data: string[]): string;
    public generateReport(): string{
    return `=== REPORT ===
${this.formatBody(this.fetchData())}
=== END ===`;
    }
}
class CsvReportGenerator extends ReportGenerator{
    protected fetchData(): string[] {
        return ["User A, 100$", "User B, 200$"];
    }

    protected formatBody(data: string[]): string{
        return data.join("\n");
    }
}
class HtmlReportGenerator extends ReportGenerator{
    protected fetchData(): string[]{
        return ["User A", "User B"];    
    }
    protected formatBody(data: string[]): string {
        return `<ul>${data.map(item => `<li>${item}</li>`).join("")}</ul>`;
    }
}