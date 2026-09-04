/*
Bắt lỗi chính tả thuộc tính (Catching Typos)
Xét cấu trúc bài viết:

TypeScript
type PostMetadata = {
  title: string;
  tags: string[];
  views: number;
};
Cho đoạn mã sau:

TypeScript
const myArticle = {
  title: "Understanding satisfies in TypeScript",
  tags: ["ts", "webdev"],
  views: 1200,
  publishedYear: 2026, // Thuộc tính dư thừa/gõ nhầm
} satisfies PostMetadata;
Yêu cầu:

TypeScript sẽ phản ứng thế nào với thuộc tính publishedYear?

Điều gì xảy ra nếu thay satisfies PostMetadata bằng as PostMetadata?
*/
// publishedYear: sẽ bị lỗi
//Điều gì xảy ra nếu thay satisfies PostMetadata bằng as PostMetadata:  không bị lỗi