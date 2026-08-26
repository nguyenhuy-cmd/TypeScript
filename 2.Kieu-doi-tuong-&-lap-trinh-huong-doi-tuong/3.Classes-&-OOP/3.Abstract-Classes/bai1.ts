/*
Khởi tạo và Bắt buộc hiện thực Abstract Method
Cho abstract class sau:

TypeScript
abstract class BaseValidator {
  abstract validate(value: string): boolean;

  public format(value: string): string {
    return value.trim();
  }
}
Yêu cầu:

Khởi tạo trực tiếp một biến const validator = new BaseValidator(); và giải thích lỗi do TypeScript 
ném ra.

Xây dựng hai subclass kế thừa BaseValidator:

EmailValidator: Cài đặt validate(value) kiểm tra chuỗi có chứa ký tự '@' hay không.

MinLengthValidator: Có constructor nhận vào minLength: number. Cài đặt validate(value) kiểm tra 
độ dài chuỗi sau khi format có đạt độ dài tối thiểu hay không.
*/
abstract class BaseValidator {
  abstract validate(value: string): boolean;

  public format(value: string): string {
    return value.trim();
  }
}
//const validator = new new BaseValidator()
//1. Vì chúng không thể khởi tạo tru ực tiếp
class EmailValidator extends BaseValidator{
    validate(value: string): boolean {
        const formatted = this.format(value);
        return formatted.includes("@")
    }
}
class MinLengthValidator extends BaseValidator{
    constructor(private minLength: number){
        super()
    }

    validate(value: string): boolean {
        const formatted = this.format(value);
        return formatted.length >= this.minLength;
    }
}

// Kiểm thử
const emailVal = new EmailValidator();
console.log(emailVal.validate(`   test@mail.com `));

const lenVal = new MinLengthValidator(5);
console.log(" abc ");

