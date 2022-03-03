/**
 * @description 枚举
 */

enum ErrorCode {
    Success = 200,
    NotFoundError = 404
};

function getList(type: string): ErrorCode {
    if (type === "success") {
        return ErrorCode.Success;
    }
    else {
        return ErrorCode.NotFoundError;
    }
}