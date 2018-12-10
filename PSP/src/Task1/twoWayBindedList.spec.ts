import * as chai from "chai";
import {expect} from "chai";

import {TwoWayList} from './twoWayBindedList';

chai.should();

let list: TwoWayList<number>;

suite("Two way binded list test", () => {});

beforeEach(() => {
    list = new TwoWayList();
});

test("should be empty", () => {
    expect(list.isEmpty()).to.be.true;
    expect(list.getSize()).to.equal(0);
});

test("should init properly", () => {
    list.init([1, 2]);
    expect(list.getSize()).to.equal(2);
    expect(list.head.element).to.equal(1);
    expect(list.tail.element).to.equal(2);
});

test("should have two two-way binded elements, starting with the unshifted one", () => {
    list.push(1);
    list.unshift(2);
    
    expect(list.getSize()).to.equal(2);
    expect(list.head.element).to.equal(2);
    expect(list.tail.element).to.equal(1);
    expect(list.head.prev).to.be.null;
    expect(list.tail.next).to.be.null;
    expect(list.head.next.element).to.equal(1);
    expect(list.tail.prev.element).to.equal(2);
});

test("should pop the last element", () => {
    list.push(1);
    list.push(2);
    const lastEl = list.pop();

    expect(lastEl).to.equal(2);
    expect(list.getSize()).to.equal(1);
});

test("should shift the first element", () => {
    list.push(1);
    list.push(2);
    const firstEl = list.shift();

    expect(firstEl).to.equal(1);
    expect(list.getSize()).to.equal(1);
});

test("should fail on pop or shift empty list", () => {
    const firstEl = list.shift();
    const lastEl = list.pop();

    expect(firstEl).to.be.null;
    expect(lastEl).to.be.null;
    expect(list.getSize()).to.equal(0);
})