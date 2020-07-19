/**
 * @description 1.创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
 */
// es5版本
function StudentGrade() {
    this.gradeList = [];
    this.addGrade = addGrade;
    this.averageGrade = averageGrade;
}
function addGrade(subject, grade) {
    this.gradeList.push(
        {
            "subject": subject,
            "grade": grade
        }
    );
}
function averageGrade() {
    let subjectNum = 0;
    let totalGrade = 0;
    for (let i in this.gradeList) {
        totalGrade += this.gradeList[i].grade;
        subjectNum += 1;
    }
    return (totalGrade / subjectNum).toFixed(2);
}

let studentGrade = new StudentGrade();
studentGrade.addGrade('语文', 90);
studentGrade.addGrade('数学', 80);
studentGrade.addGrade('英语', 70);
console.log(studentGrade.averageGrade());

// es6版本
class StudentGrade {
    constructor() {
        this.gradeList = [];
    }
    addGrade(subject, grade) {
        this.gradeList.push({
            "subject": subject,
            "grade": grade
        });
    }
    averageGrade() {
        let subjectNum = 0;
        let totalGrade = 0;
        for (let i in this.gradeList) {
            totalGrade += this.gradeList[i].grade;
            subjectNum += 1;
        }
        return (totalGrade / subjectNum).toFixed(2);
    }
}
const studentGrade = new StudentGrade();
studentGrade.addGrade('语文', 90);
studentGrade.addGrade('数学', 80);
studentGrade.addGrade('英语', 70);
console.log(studentGrade.averageGrade());

/**
 * @description 2.将一组单词储存在一个数组中并进行正序和倒序排序
 */
// 字符串正序排序
function strPositiveSort(arr) {
    if (arr && Array.isArray(arr)) {
        return arr.sort();
    }
    else {
        return arr;
    }
};
// 字符串倒序排序
function strReverseSort(arr) {
    if (arr && Array.isArray(arr)) {
        return arr.sort().reverse();
    }
    else {
        return arr;
    }
};

var strArr = ['alpha', 'cindy', 'billy', 'david', 'fox', 'electron'];
console.log(strPositiveSort(strArr));
console.log(strReverseSort(strArr));

/**
 * @description 3.创建一个对象，将字母储存在一个数组中，并且用一个方法可以将字母连在一起形成一个单词
 */
class StrObj {
    constructor() {
        this.strArr = [];
    }
    addStr(str) {
        this.strArr.push(str);
    }
    concatStr() {
        return this.strArr.join('');
    }
}
let strObj = new StrObj();
strObj.addStr('H');
strObj.addStr('e');
strObj.addStr('l');
strObj.addStr('l');
strObj.addStr('o');
console.log(strObj.concatStr());
