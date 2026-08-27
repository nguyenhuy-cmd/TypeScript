/*
Xây dựng Generic Factory Pattern với Abstract Constructor
Khi làm việc với Abstract Class, ta không thể dùng new Ctor() trực tiếp vì abstract class không thể khởi tạo instance.

Cho cấu trúc sau:

TypeScript
abstract class BaseComponent {
  abstract render(): void;
}

class ButtonComponent extends BaseComponent {
  render() {
    console.log("Rendering Button");
  }
}
Yêu cầu:

Định nghĩa type ComponentConstructor<T BaseComponent extends> bằng Construct Signature: new (...args: any[]) => T.

Viết hàm generic instantiateComponent<T BaseComponent extends>(Ctor: ComponentConstructor<T>, ...args: any[]): T.

Kiểm tra việc truyền ButtonComponent và BaseComponent vào hàm instantiateComponent để quan sát cơ chế bảo vệ kiểu của TypeScript.
*/
abstract class BaseComponent {
  abstract render(): void;
}

class ButtonComponent extends BaseComponent {
  render() {
    console.log("Rendering Button");
  }
}

type ComponentConstructor<T extends BaseComponent> = new (...args: any[]) => T;

function instantiateComponent<T extends BaseComponent>(
    Ctor: ComponentConstructor<T>,
    ...args: any[] 
): T {
    return new Ctor(...args);
}

const btn = instantiateComponent(ButtonComponent)
btn.render(); // // "Rendering Button"