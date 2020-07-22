/**
 * @description List列表类
 * @param {Array} dataStore 保存列表元素
 * @param {Number} listSize 列表中元素个数
 * @param {Number} pos 列表的当前位置
 * @param {Function} length 返回列表中元素个数
 * @param {Function} clear 清空列表中的元素
 * @param {Function} toString 返回列表中元素的字符串形式
 * @param {Function} getElement 返回当前位置的元素
 * @param {Function} insert 在现有元素后插入一个元素
 * @param {Function} append 在列表后插入一个元素
 * @param {Function} remove 在列表中删除元素
 * @param {Function} front 在列表中的当前位置移动到第一个元素
 * @param {Function} end 在列表中的当前元素移动到最后一个元素
 * @param {Function} prev 将当前位置前移一位
 * @param {Function} next 将当前位置后移一位
 * @param {Function} hasNext 判断后一位
 * @param {Function} hasPrev 判断前一位
 * @param {Function} currPos 返回列表的当前位置
 * @param {Function} moveTo 将当前位置移动到指定位置
 */
class List {
    constructor() {
        this.listSize = 0;
        this.dataStore = [];
        this.pos = 0;
    }
    length() {
        return this.listSize;
    }
    clear() {
        this.listSize = 0;
        this.dataStore = [];
        this.pos = 0;
        this.length = 0;
    }
    toString() {
        return this.dataStore.toString();
    }
    getElement() {
        return this.dataStore[this.pos];
    }
    insert(val) {
        this.dataStore[this.pos + 1] = val;
        this.listSize += 1;
    }
    append(val) {
        this.dataStore.push(val);
        this.listSize += 1;
    }
    remove(val) {
        const target = val;
        const recursiveRemove = target => {
            const targetIndex = this.dataStore.indexOf(target);
            if (targetIndex === -1) {
                // 已删除
                return;
            }
            else {
                // 未删除
                this.dataStore.splice(targetIndex, 1);
                this.listSize -= 1;
                return recursiveRemove(target);
            }
        }
        recursiveRemove(target);
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        this.pos -= 1;
    }
    next() {
        if (this.pos < this.listSize) {
            this.pos += 1;
        }
    }
    hasNext() {
        return this.pos < this.listSize
    }
    hasPrev() {
        return this.pos >= 0;
    }
    currPos() {
        return this.pos;
    }
    moveTo(index) {
        this.pos = index;
    }
}