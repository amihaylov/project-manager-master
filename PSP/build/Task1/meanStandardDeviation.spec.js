"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chai_1 = require("chai");
const twoWayBindedList_1 = require("./twoWayBindedList");
const meanStandardDeviation_1 = require("./meanStandardDeviation");
chai.should();
let estimatedProxySize;
let developmentHours;
suite("Mean and standard deviation", () => { });
before(() => {
    const proxyValues = [160, 591, 114, 229, 230, 270, 128, 1657, 1503, 624];
    const devHoursValues = [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    estimatedProxySize = new twoWayBindedList_1.TwoWayList();
    developmentHours = new twoWayBindedList_1.TwoWayList();
    estimatedProxySize.init(proxyValues);
    developmentHours.init(devHoursValues);
});
test('should pass Estimated Proxy size values', () => {
    let meanProxy = twoWayBindedList_1.TwoWayList.average(estimatedProxySize);
    // Rounding to two digits after decimal point, js style
    meanProxy = +parseFloat(meanProxy.toString()).toFixed(2);
    let stdDeviationProxy = meanStandardDeviation_1.standardDeviation(estimatedProxySize, meanProxy);
    // Rounding to two digits after decimal point, js style
    stdDeviationProxy = +parseFloat(stdDeviationProxy.toString()).toFixed(2);
    chai_1.expect(meanProxy).to.equal(550.6);
    chai_1.expect(stdDeviationProxy).to.equal(572.03);
});
test('should pass Development Hours values', () => {
    let meanDevHours = twoWayBindedList_1.TwoWayList.average(developmentHours);
    // Rounding to two digits after decimal point, js style
    meanDevHours = +parseFloat(meanDevHours.toString()).toFixed(2);
    let stdDeviationDevHours = meanStandardDeviation_1.standardDeviation(developmentHours, meanDevHours);
    // Rounding to two digits after decimal point, js style
    stdDeviationDevHours = +parseFloat(stdDeviationDevHours.toString()).toFixed(2);
    chai_1.expect(meanDevHours).to.equal(60.32);
    chai_1.expect(stdDeviationDevHours).to.equal(62.26);
});
//# sourceMappingURL=meanStandardDeviation.spec.js.map