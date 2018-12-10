"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chai_1 = require("chai");
const twoWayBindedList_1 = require("../Task1/twoWayBindedList");
const relativeSizeRanges_1 = require("./relativeSizeRanges");
chai.should();
const classLOC = [18, 18, 25, 31, 37, 82, 82, 87, 89, 230, 85, 87, 558];
const numberOfMethods = [3, 3, 3, 3, 3, 5, 4, 4, 4, 10, 3, 3, 10];
const pagesPerChapter = [7, 12, 10, 12, 10, 12, 12, 12, 12, 8, 8, 8, 20, 14, 18, 12];
let locPerMethodList;
let pagesPerChapterList;
suite("Relative size ranges", () => { });
before(() => {
    const locPerMethod = classLOC.map((item, idx) => item / numberOfMethods[idx]);
    locPerMethodList = new twoWayBindedList_1.TwoWayList();
    pagesPerChapterList = new twoWayBindedList_1.TwoWayList();
    locPerMethodList.init(locPerMethod);
    pagesPerChapterList.init(pagesPerChapter);
});
test('Should pass for Class LOC ', () => {
    const table = relativeSizeRanges_1.getRelativeSizes(locPerMethodList);
    const expectedResult = {
        vs: 4.3953,
        s: 8.5081,
        m: 16.4696,
        l: 31.8811,
        vl: 61.7137
    };
    chai_1.expect(table).to.deep.equal(expectedResult);
});
test('Should pass for Pages per chapter', () => {
    const table = relativeSizeRanges_1.getRelativeSizes(pagesPerChapterList);
    const expectedResult = {
        vs: 6.3375,
        s: 8.4393,
        m: 11.2381,
        l: 14.9650,
        vl: 19.9280
    };
    chai_1.expect(table).to.deep.equal(expectedResult);
});
//# sourceMappingURL=relativeSizeRanges.spec.js.map