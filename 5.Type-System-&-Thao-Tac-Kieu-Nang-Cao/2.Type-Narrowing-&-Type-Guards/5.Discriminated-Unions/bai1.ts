/*
Xây dựng Event Dispatcher cho hệ thống Chat
Thiết kế hệ thống tin nhắn đa phương tiện:

Định nghĩa 3 loại tin nhắn:

TextMessage: { type: "TEXT"; text: string; senderId: string }

ImageMessage: { type: "IMAGE"; imageUrl: string; dimensions: { width: number; height: number }; senderId: string }

LocationMessage: { type: "LOCATION"; coords: { lat: number; lng: number }; senderId: string }

Gộp thành ChatMessage = TextMessage | ImageMessage | LocationMessage.

Viết hàm renderMessageSummary(msg: ChatMessage): string:

Sử dụng switch (msg.type) để trả về chuỗi mô tả tóm tắt nội dung tương ứng từng loại tin nhắn.
*/
type TextMessage = {
    type: "TEXT";
    text: string;
    senderId: string;
};

type ImageMessage = {
    type: "IMAGE";
    imageUrl: string;
    dimensions: {
        width: number;
        height: number;
    };
    senderId: string;
};

type LocationMessage = {
    type: "LOCATION";
    coords: {
        lat: number;
        lng: number;
    };
    senderId: string;
};

type ChatMessage = TextMessage | ImageMessage | LocationMessage;

function renderMessageSummary(msg: ChatMessage): string {
    switch (msg.type) {
        case "TEXT":
            return `Text message from ${msg.senderId}: ${msg.text}`;

        case "IMAGE":
            return `Image from ${msg.senderId}: ${msg.imageUrl} (${msg.dimensions.width}x${msg.dimensions.height})`;

        case "LOCATION":
            return `Location from ${msg.senderId}: (${msg.coords.lat}, ${msg.coords.lng})`;
    }
}