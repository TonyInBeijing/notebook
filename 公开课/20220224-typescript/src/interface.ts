/**
 * @description 接口
 */

interface User {
    name: string,
    age: number,
    sex: string
};

function getUser(): User {
    return {
        name: "小明",
        age: 22,
        sex: "男"
    }
};

