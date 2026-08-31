/*
Thao tác trên Union của Object Shapes
Xét hai cấu trúc dữ liệu sau:

TypeScript
type EmailContact = {
  email: string;
  isVerified: boolean;
};

type PhoneContact = {
  phone: string;
  countryCode: string;
};
Cho hàm sendNotification(contact: EmailContact | PhoneContact, msg: string): void.

Yêu cầu:

Nếu gọi console.log(contact.email) ngay đầu hàm thì TypeScript sẽ báo lỗi gì?

Viết thân hàm hoàn chỉnh sử dụng toán tử in để kiểm tra:

Nếu có thuộc tính "email", in ra: "Sending email to: <email>".

Nếu có thuộc tính "phone", in ra: "Sending SMS to: <countryCode> <phone>".
*/
type EmailContact = {
  email: string;
  isVerified: boolean;
};

type PhoneContact = {
  phone: string;
  countryCode: string;
};
function sendNotification(contact: EmailContact | PhoneContact, msg: string): void{
    //console.log(contact.email)

    // Thu hẹp thành EmailContact
    if("email" in contact){
        console.log(`Đang gửi email đến: ${contact.email} | Nội dung: ${msg}`);
    }else {
        console.log(`Đang gửi tin nhắn SMS đến: ${contact.countryCode} ${contact.phone}`);
        
    }
}
/*
Lỗi: Thuộc tính 'email' không tồn tại trên kiểu 'EmailContact | PhoneContact'. 
Thuộc tính 'email' không tồn tại trên kiểu 'PhoneContact'.

Giải thích: Giải thích: TypeScript chỉ cho phép truy cập trực tiếp các thuộc tính tồn tại trên cả hai vế của Union. 
Vì PhoneContact không có email, TypeScript chặn để tránh lỗi runtime undefined.
*/

