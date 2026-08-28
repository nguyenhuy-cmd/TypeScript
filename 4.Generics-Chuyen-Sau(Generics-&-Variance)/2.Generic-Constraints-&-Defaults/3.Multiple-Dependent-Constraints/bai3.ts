/*
Chuỗi 3 cấp ràng buộc (<T, K T, T[K] V extends keyof>)
Xây dựng cơ chế phát sự kiện dựa trên thay đổi giá trị thuộc tính (Property Change Listener):

Định nghĩa type callback:

TypeScript
type ChangeListener<T, K extends keyof T> = (newValue: T[K], oldValue: T[K]) => void;
Tạo class ObservableEntity<T extends object>:

Thuộc tính private data: T.

Thuộc tính private listeners: Map<keyof T, Function[]> = new Map().

Constructor nhận vào initialData: T.

Phương thức on<K T extends keyof>(key: K, callback: ChangeListener<T, K>): void: Đăng ký lắng nghe sự kiện thay đổi cho một key cụ thể.

Phương thức set<K T, T[K] V extends keyof>(key: K, value: V): void:

Lưu giá trị cũ.

Cập nhật this.data[key] = value.

Kích hoạt toàn bộ listener đã đăng ký cho key đó với (value, oldValue).
*/
type ChangeListener<T, K extends keyof T> = (newValue: T[K], oldValue: T[K]) => void;
class ObservableEntity<T extends object>{
    private data: T;
    private listeners: Map<keyof T, Function[]> = new Map();
    constructor(initialData: T){
        this.data = {...initialData};
    }

    public on<K extends keyof T>(key: K, callback: ChangeListener<T, K>): void{
        const list = this.listeners.get(key) ?? [];
        list.push(callback);
        this.listeners.set(key, list)
    }

    public set<K extends keyof T, V extends  T[K]>(key: K, value: V): void{
        const oldValue = this.data[key];
        if(oldValue !== value){
            this.data[key] = value;
            const callBacks = this.listeners.get(key) || [];
            callBacks.forEach((cb) => cb(value, oldValue));
        }
    }

    public get<K extends keyof T>(key: K): T[K]{
        return this.data[key];
    }
}

// kiểm thử:
interface AccountConfig{
    maxAttempts: number;
    environment: "DEV" | "PROD";   
}
const account = new ObservableEntity<AccountConfig>({
    maxAttempts: 3,
    environment: "DEV"
})

// lắng nghe thay đổi maxAttempts
account.on("maxAttempts", (newVal, oldVal) => {
    console.log(`maxAttempts đã thay đổi từ ${oldVal} thành ${newVal}`);
});

account.set("maxAttempts", 5)