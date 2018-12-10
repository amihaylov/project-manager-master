"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
/**
 *
 * @class ListNode This class keeps track of each element information
 * @template E Element type
 */
class ListNode {
    constructor(element, next, prev) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}
exports.ListNode = ListNode;
/**
 *
 * @class TwoWayList Two way linked list class
 * @template E List type
 */
class TwoWayList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    static sum(list) {
        let sum = 0;
        list.forEach((node) => sum += node.element);
        return sum;
    }
    static average(list) {
        let avg = TwoWayList.sum(list);
        avg /= list.getSize();
        return avg;
    }
    static mathLn(list) {
        const res = new TwoWayList();
        const initArr = [];
        list.forEach((node) => initArr.push(Math.log(node.element)));
        res.init(initArr);
        return res;
    }
    init(initValue) {
        initValue.forEach((val) => this.push(val));
    }
    /**
     *
     * @returns Size of list
     * @memberof TwoWayList
     */
    getSize() { return this.size; }
    /**
     *
     *
     * @returns If list is empty
     * @memberof TwoWayList
     */
    isEmpty() { return this.size === 0; }
    /**
     *
     * Adds element in the beginning of the list
     * @param {E} element Element to be added
     * @memberof TwoWayList
     */
    unshift(element) {
        const tmp = new ListNode(element, this.head, null);
        if (this.head !== null) {
            this.head.prev = tmp;
        }
        this.head = tmp;
        if (this.tail === null) {
            this.tail = tmp;
        }
        this.size++;
    }
    /**
     *
     * Adds element in the end of the list
     * @param {E} element Element to be added
     * @memberof TwoWayList
     */
    push(element) {
        const tmp = new ListNode(element, null, this.tail);
        if (this.tail !== null) {
            this.tail.next = tmp;
        }
        this.tail = tmp;
        if (this.head === null) {
            this.head = tmp;
        }
        this.size++;
    }
    /**
     * this method walks forward through the linked list
     */
    iterateForward() {
        let tmp = this.head;
        while (tmp !== null) {
            tmp = tmp.next;
        }
    }
    /**
     * this method walks backward through the linked list
     */
    iterateBackward() {
        let tmp = this.tail;
        while (tmp !== null) {
            tmp = tmp.prev;
        }
    }
    /**
     *
     * Removes the first element of the list
     * @returns The removed element
     * @memberof TwoWayList
     */
    shift() {
        if (this.size === 0 || this.head === null) {
            console.log(chalk_1.default.red("Error, no such element"));
            return null;
        }
        const tmp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return tmp.element;
    }
    /**
     *
     * Removes the last element of the list
     * @returns The removed element
     * @memberof TwoWayList
     */
    pop() {
        if (this.size === 0 || this.tail === null) {
            console.log(chalk_1.default.red("Error, no such element"));
            return null;
        }
        const tmp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return tmp.element;
    }
    /**
     *
     * @param fn Callback function for retrieving nodes
     * @memberof TwoWayList
     */
    forEach(fn) {
        let tmp = this.head;
        while (tmp !== null) {
            fn(tmp);
            tmp = tmp.next;
        }
    }
}
exports.TwoWayList = TwoWayList;
// Testing two-way linked class
// const main = () => {
//     const dll = new TwoWayList<number>();
//     dll.unshift(10);
//     dll.unshift(34);
//     dll.push(56);
//     dll.push(364);
//     dll.push(707);
//     dll.iterateForward();
//     dll.shift();
//     dll.pop();
//     dll.iterateBackward();
// }
// main();
//# sourceMappingURL=twoWayBindedList.js.map