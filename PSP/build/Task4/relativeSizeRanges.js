"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twoWayBindedList_1 = require("../Task1/twoWayBindedList");
const calculateAverage = (list) => {
    const lnList = twoWayBindedList_1.TwoWayList.mathLn(list);
    return twoWayBindedList_1.TwoWayList.average(lnList);
};
const calculateVariance = (list, avg) => {
    const lnList = twoWayBindedList_1.TwoWayList.mathLn(list);
    const sqrLnMinusAvg = [];
    const tmpList = new twoWayBindedList_1.TwoWayList();
    let result = 0;
    lnList.forEach((node) => {
        const item = Math.pow(node.element - avg, 2);
        sqrLnMinusAvg.push(item);
    });
    tmpList.init(sqrLnMinusAvg);
    result = twoWayBindedList_1.TwoWayList.sum(tmpList);
    result /= (lnList.getSize() - 1);
    result = Math.sqrt(result);
    return result;
};
exports.getRelativeSizes = (list) => {
    const avg = calculateAverage(list);
    const variance = calculateVariance(list, avg);
    const antiLN = (value) => {
        let result = Math.pow(Math.E, value);
        // Rounding to 4 digits after decimal point
        result = +parseFloat(result.toString()).toFixed(4);
        return result;
    };
    const result = {
        vs: antiLN(avg - 2 * variance),
        s: antiLN(avg - variance),
        m: antiLN(avg),
        l: antiLN(avg + variance),
        vl: antiLN(avg + 2 * variance)
    };
    return result;
};
//# sourceMappingURL=relativeSizeRanges.js.map