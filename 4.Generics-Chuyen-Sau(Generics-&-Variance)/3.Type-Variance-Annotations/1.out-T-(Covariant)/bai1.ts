/*
Khai báo out T và Cơ chế bảo vệ vị trí Output
Xét hai interface sau:

TypeScript
// Interface 1
interface DataReader<out T> {
  read(): T;
  readonly value: T;
}

// Interface 2
interface DataMutator<out T> {
  write(data: T): void; // TypeScript sẽ báo lỗi tại đây
}
Yêu cầu:

Giải thích lý do vì sao DataMutator<out T> bị TypeScript báo lỗi biên dịch.

Cho biết vị trí tham số (data: T) của một phương thức trong class/interface được xếp vào nhóm nào 
(input position hay output position)?
*/
/*
1. vì out T là vị trí đầu ra nên không được đặt ở vị trí đầu vào
2. Được xếp vào nhóm input position
*/