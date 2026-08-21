/*
Kỹ thuật Exhaustive Checking với Discriminated Unions
Cho hệ thống xử lý thông báo với các loại phương thức khác nhau:

TypeScript
interface EmailNotification {
  type: "email";
  emailAddress: string;
}

interface SMSNotification {
  type: "sms";
  phoneNumber: string;
}

interface PushNotification {
  type: "push";
  deviceToken: string;
}

type AppNotification = EmailNotification | SMSNotification | PushNotification;
Yêu cầu:

Viết hàm sendNotification(noti: AppNotification): void.

Sử dụng switch(noti.type) để xử lý từng loại:

"email": in Sending email to <emailAddress>.

"sms": in Sending SMS to <phoneNumber>.

Trong nhánh default, áp dụng kỹ thuật gán biến kiểu never để bắt lỗi tại compile-time nếu có trường hợp chưa được xử lý (ở đây đang cố tình bỏ quên "push").

Thêm nhánh xử lý "push" để sửa hết lỗi TypeScript.
*/
interface EmailNotification {
    type: "email";
    emailAddress: string;
}

interface SMSNotification {
    type: "sms";
    phoneNumber: string;
}

interface PushNotification {
    type: "push";
    deviceToken: string;
}

type AppNotification = EmailNotification | SMSNotification | PushNotification;
function sendNotification(noti: AppNotification): void {
    switch (noti.type) {
        case "email":
            console.log(`Sending email to ${noti.emailAddress}`);
            break;
        case "sms":
            console.log(`Sending SMS to ${noti.phoneNumber}`);
            break;
        case "push":
            console.log(`Sending Push Notification to ${noti.deviceToken}`);
            break;
        default:
            const _unhandledCase: never = noti;
            throw new Error(`Unhandled notification type: ${_unhandledCase}`)
    }
}