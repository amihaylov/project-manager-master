import * as chai from "chai";
import {expect} from "chai";

import {TwoWayList} from './twoWayBindedList';
import {standardDeviation} from './meanStandardDeviation';

chai.should();

let estimatedProxySize: TwoWayList<number>;
let developmentHours: TwoWayList<number>;

suite("Mean and standard deviation", () => {});

before(() => {
    const proxyValues = [160, 591, 114, 229, 230, 270, 128, 1657, 1503,624];
    const devHoursValues = [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

    estimatedProxySize = new TwoWayList();
    developmentHours = new TwoWayList();

    estimatedProxySize.init(proxyValues);
    developmentHours.init(devHoursValues);
});

test('should pass Estimated Proxy size values', () => {
    let meanProxy = TwoWayList.average(estimatedProxySize);
    // Rounding to two digits after decimal point, js style
    meanProxy = +parseFloat(meanProxy.toString()).toFixed(2);
    let stdDeviationProxy = standardDeviation(estimatedProxySize, meanProxy);
    // Rounding to two digits after decimal point, js style
    stdDeviationProxy = +parseFloat(stdDeviationProxy.toString()).toFixed(2);

    expect(meanProxy).to.equal(550.6);
    expect(stdDeviationProxy).to.equal(572.03);
});

test('should pass Development Hours values', () => {
    let meanDevHours =  TwoWayList.average(developmentHours);
    // Rounding to two digits after decimal point, js style
    meanDevHours = +parseFloat(meanDevHours.toString()).toFixed(2);
    let stdDeviationDevHours = standardDeviation(developmentHours, meanDevHours);
    // Rounding to two digits after decimal point, js style
    stdDeviationDevHours = +parseFloat(stdDeviationDevHours.toString()).toFixed(2);

    expect(meanDevHours).to.equal(60.32);
    expect(stdDeviationDevHours).to.equal(62.26);
});