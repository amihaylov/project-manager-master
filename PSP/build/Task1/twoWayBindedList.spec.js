"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chai_1 = require("chai");
const twoWayBindedList_1 = require("./twoWayBindedList");
chai.should();
let list;
suite("Two way binded list test", () => { });
beforeEach(() => {
    list = new twoWayBindedList_1.TwoWayList();
});
test("should be empty", () => {
    chai_1.expect(list.isEmpty()).to.be.true;
    chai_1.expect(list.getSize()).to.equal(0);
});
test("should init properly", () => {
    list.init([1, 2]);
    chai_1.expect(list.getSize()).to.equal(2);
    chai_1.expect(list.head.element).to.equal(1);
    chai_1.expect(list.tail.element).to.equal(2);
});
test("should have two two-way binded elements, starting with the unshifted one", () => {
    list.push(1);
    list.unshift(2);
    chai_1.expect(list.getSize()).to.equal(2);
    chai_1.expect(list.head.element).to.equal(2);
    chai_1.expect(list.tail.element).to.equal(1);
    chai_1.expect(list.head.prev).to.be.null;
    chai_1.expect(list.tail.next).to.be.null;
    chai_1.expect(list.head.next.element).to.equal(1);
    chai_1.expect(list.tail.prev.element).to.equal(2);
});
test("should pop the last element", () => {
    list.push(1);
    list.push(2);
    const lastEl = list.pop();
    chai_1.expect(lastEl).to.equal(2);
    chai_1.expect(list.getSize()).to.equal(1);
});
test("should shift the first element", () => {
    list.push(1);
    list.push(2);
    const firstEl = list.shift();
    chai_1.expect(firstEl).to.equal(1);
    chai_1.expect(list.getSize()).to.equal(1);
});
test("should fail on pop or shift empty list", () => {
    const firstEl = list.shift();
    const lastEl = list.pop();
    chai_1.expect(firstEl).to.be.null;
    chai_1.expect(lastEl).to.be.null;
    chai_1.expect(list.getSize()).to.equal(0);
});
//# sourceMappingURL=twoWayBindedList.spec.js.map