/*
Đa kế thừa kết hợp nhiều thành phần (Multiple Inheritance)
Thiết kế hệ thống quản lý bài viết trên mạng xã hội với tính năng tương tác đa chiều:

Định nghĩa interface Auditable: có thuộc tính authorId: string và lastModified: Date.

Định nghĩa interface Likeable: có thuộc tính likeCount: number và phương thức like(): void.

Định nghĩa interface Commentable: có phương thức addComment(comment: string): void.

Định nghĩa interface SocialPost extends Auditable, Likeable, Commentable:

Bổ sung thêm content: string.

Viết một đối tượng post hoàn chỉnh thỏa mãn interface SocialPost.
*/
interface Auditable {
    authorId: string;
    lastModified: Date
}
interface Likeable{
    likeCount: number;
    like(): void;
}
interface Commentable {
    addComment(comment: string): void
}
interface SocialPost extends Auditable, Likeable, Commentable {
    content: string;
}
const post: SocialPost = {
    authorId: "1",
    lastModified: new Date(),
    likeCount: 1,
    like(){
        console.log(`oke`);
    },
    addComment(comment: string){
       console.log(
       `Đã comment ${comment}`); 
    },
    content: "Đã làm xong"
} 
console.log(post.authorId);
console.log(post.content);
console.log(post.likeCount);

post.like();
post.addComment("Bài viết hay!");