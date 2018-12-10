import * as chai from "chai";
import {expect} from "chai";

import {TwoWayList} from '../Task1/twoWayBindedList';
import {getRegressionCorrelation} from './regressionCorrelation';

chai.should();

const estimatedProxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
const planAddedAndModifiedSize = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
const actualAddedAndModifiedSize = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
const actualDevelopmentHours = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
const E = 386;

let xList: TwoWayList<number>;
let yList: TwoWayList<number>;

suite("Regression and correlation", () => {});

beforeEach(() => {
    xList = new TwoWayList();
    yList = new TwoWayList();
});

test("should throw error on lists with different dimensions", () => {
    xList.init([1]);
    yList.init([1, 2]);
    
    try {
        getRegressionCorrelation(xList, yList, E)
    } catch (e) {
        expect(e).to.be.ok;
    }
});

test("should pass against xList Estimated Proxy size and yList Actual Added and Modified Size", () => {
    xList.init(estimatedProxySize);
    yList.init(actualAddedAndModifiedSize);

    const res = getRegressionCorrelation(xList, yList, E);
    const expectedRes = {
        b0: -22.552533,
        b1: 1.727932,
        r: 0.954497,
        rSqr: 0.911064,
        p: 644.429384
    };

    expect(res).to.deep.equal(expectedRes);
});

test("should pass against xList Estimated Proxy size and yList actual development time", () => {
    xList.init(estimatedProxySize);
    yList.init(actualDevelopmentHours);

    const res = getRegressionCorrelation(xList, yList, E);
    const expectedRes = {
        b0: -4.038882,
        b1: 0.168127,
        r: 0.933307,
        rSqr: 0.871062,
        p: 60.858005
    };

    expect(res).to.deep.equal(expectedRes);
});

test("should pass against xList plan added and modified size and yList actual added and modified size", () => {
    xList.init(planAddedAndModifiedSize);
    yList.init(actualAddedAndModifiedSize);

    const res = getRegressionCorrelation(xList, yList, E);
    const expectedRes = {
        b0: -23.923888,
        b1: 1.430967,
        r: 0.963114,
        rSqr: 0.927589,
        p: 528.429352
    };

    expect(res).to.deep.equal(expectedRes);
});

test("should pass against xList plan added and modified size and yList actual development time", () => {
    xList.init(planAddedAndModifiedSize);
    yList.init(actualDevelopmentHours);

    const res = getRegressionCorrelation(xList, yList, E);
    const expectedRes = {
        b0: -4.603745,
        b1: 0.140164,
        r: 0.948033,
        rSqr: 0.898767,
        p: 49.499376
    };

    expect(res).to.deep.equal(expectedRes);
});