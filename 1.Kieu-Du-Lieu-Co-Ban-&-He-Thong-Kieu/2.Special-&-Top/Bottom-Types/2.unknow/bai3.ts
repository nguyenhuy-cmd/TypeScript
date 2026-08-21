/*
Type Guard kiểm tra cấu trúc Object từ API
Khi nhận dữ liệu từ external API hoặc JSON.parse, dữ liệu ban đầu luôn nên được gán kiểu unknown.

Cho interface sau:

TypeScript
interface UserProfile {
  id: number;
  email: string;
  isActive?: boolean;
}
Yêu cầu:

Viết một hàm Custom Type Guard: function isUserProfile(data: unknown): data is UserProfile.

Kiểm tra đầy đủ:

data phải là một object và khác null.

id phải tồn tại và có kiểu number.

email phải tồn tại và có kiểu string.

Nếu có isActive, nó phải có kiểu boolean hoặc undefined.
*/
interface UserProfile {
    id: number;
    email: string;
    isActive?: boolean;
}
function isUserProfile(data: unknown): data is UserProfile {
    if (typeof data !== "object" && data === null) {
        return false;
    }

    const candidate = data as Record<string, unknown>;

    const hasValidId = typeof candidate.id === "number";;
    const hasValidEmail = typeof candidate.email === "string";
    const hasValidActive = candidate.isActive === undefined || typeof candidate.isActive === "boolean";
    return hasValidActive && hasValidEmail && hasValidId;
}

// Kiểm thử
const rawResponse: unknown = { id: 1, email: "dev@example.com", isActive: true };

if (isUserProfile(rawResponse)) {
    // TypeScript tự động suy luận rawResponse là UserProfile
    console.log(rawResponse.email.toUpperCase());
}