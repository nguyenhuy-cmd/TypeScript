/*
Refactor loại bỏ Heterogeneous Enum
Cho đoạn code quản lý trạng thái xử lý logic:

TypeScript
// Anti-pattern: Kết hợp số và chuỗi
enum TaskState {
  INITIAL = 0,
  RUNNING = "IN_PROGRESS",
  FAILED = -1,
  COMPLETED = "DONE"
}

function handleState(state: TaskState) {
  if (typeof state === "number") {
    console.log(`Numeric state code: ${state}`);
  } else {
    console.log(`String state label: ${state}`);
  }
}
Yêu cầu:

Refactor lại đoạn code trên theo 2 cách chuẩn hóa:

Cách 1: Dùng Pure String Enum (hoặc Union of String Literals) để tối ưu tính tường minh khi debug.

Cách 2: Tách riêng trạng thái hiển thị (string) và mã trạng thái (number) nếu nghiệp vụ bắt buộc cần cả 2.
*/
// Cách 1:
type TaskState = "INITIAL" | "RUNNING" | "FAILED" | "COMPLETED";
function handleState(status: TaskState){
    console.log(`Trạng thái hiện tại: ${status}`);
} 

// Cách 2:
const TASK_STATE = {
    INITIAL: {code: 0, label: "Initial"},
    RUNNING: {code: 1, label: "In Progress"},
    FAILED: {code: -1, label: "Failed"},
    COMPLETED: {code: 1, label: "Done"}      
}as const;
type TaskStateKey = keyof typeof TASK_STATE;

function printTaskInfo(stateKey: TaskStateKey){
    const {code, label} = TASK_STATE[stateKey];
    console.log(`State: ${label} (Code: ${code})`);  
}