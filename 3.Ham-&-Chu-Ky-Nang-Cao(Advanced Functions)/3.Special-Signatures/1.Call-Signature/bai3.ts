/*
Xây dựng HTTP Client giả lập giống Axios (Callable Object)
Thiết kế cấu trúc cho một thư viện HTTP Client rút gọn:

Định nghĩa interface HttpClient:

Call Signature: (url: string): Promise<string> (Gửi request mặc định GET).

Thuộc tính: defaultHeaders: Record<string, string>.

Phương thức: post(url: string, body: unknown): Promise<string>.

Khởi tạo một biến apiClient có kiểu HttpClient và kiểm tra cả 2 cách sử dụng: 
gọi trực tiếp như hàm apiClient("/users") và gọi phương thức 
apiClient.post("/users", { name: "John" }).
*/
interface HttpClient{
   (url: string): Promise<string>;
   defaultHeaders: Record<string, string>;
   post(url: string, body: unknown): Promise<string>
}
function createHttpClient(): HttpClient{
    const client  = async (url: string): Promise<string> => {
        return `Yêu cầu GET tới ${url}`
    }

    client.defaultHeaders = {
        "Loại nội dung": "application/json"
    }

    client.post = async (
        url: string,
        body: unknown
    ): Promise<string> => {
       return `POST request to ${url} with body ${JSON.stringify(body)}`;
  };

  return client;
}
// Khởi tạo
const apiClient: HttpClient = createHttpClient();

// Cách 1: Gọi trực tiếp như function
apiClient("users").then((result) => {
    console.log(result);
});

// Cách 2: Gọi method post 
apiClient.post("/users", {name: "Jhon"}).then((result) => {
    console.log(result);
});

console.log(apiClient.defaultHeaders);


