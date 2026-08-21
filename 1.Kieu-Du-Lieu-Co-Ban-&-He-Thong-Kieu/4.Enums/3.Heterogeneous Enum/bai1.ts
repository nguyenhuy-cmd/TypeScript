/*
Khai báo và phân tích cấu trúc Runtime
Cho enum hỗn hợp sau:

TypeScript
enum MixedResponse {
  No = 0,
  Yes = "YES",
  Maybe = 1,
}
Yêu cầu:

Viết cấu trúc đối tượng JavaScript thuần được sinh ra ở runtime cho MixedResponse.

Cho biết kết quả của MixedResponse[0] và MixedResponse["YES" as any].
*/
export const MixedResponse = {
  No:0,
  "0": "No",

  Yes: "YES",

  Maybe: 1,
  "1": "Maybe",
}
console.log(MixedResponse[0]); //kq: no 
console.log(MixedResponse["YES" as any]); //kq: undefine

