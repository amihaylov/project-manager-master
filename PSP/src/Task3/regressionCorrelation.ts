import {TwoWayList} from '../Task1/twoWayBindedList';

export const getRegressionCorrelation = (xList: TwoWayList<number>, yList: TwoWayList<number>, E: number): {
    b0: number,
    b1: number,
    r: number,
    rSqr: number,
    p: number
    } => {
    if (xList.getSize() !== yList.getSize()) {
        throw Error('xList and yList should be of same dimension');
    }

    const listSize = xList.getSize();
    const meanX = TwoWayList.average(xList);
    const meanY =  TwoWayList.average(yList);

    let result: any = {
        b0: 0,
        b1: 0,
        r: 0,
        rSqr: 0,
        p: 0
    }

    let xTmp = xList.head;
    let yTmp = yList.head;

    let xSum = 0;
    let ySum = 0;
    let xSqrSum = 0;
    let ySqrSum = 0;
    let xMulYSym = 0;

    while (xTmp !== null) {
        xSum += xTmp.element;
        ySum += yTmp.element;
        xSqrSum += Math.pow(xTmp.element, 2);
        ySqrSum += Math.pow(yTmp.element, 2);
        xMulYSym += xTmp.element * yTmp.element;

        xTmp = xTmp.next;
        yTmp = yTmp.next;
    }

    result.b1 = (xMulYSym - (listSize * meanX * meanY)) / (xSqrSum - (listSize * Math.pow(meanX, 2)));
    result.b0 = meanY - result.b1 * meanX;

    const rDivide = listSize * xMulYSym - (xSum * ySum);
    const rDivisor = (listSize * xSqrSum - Math.pow(xSum, 2)) * (listSize * ySqrSum - Math.pow(ySum, 2));
    
    result.r = rDivide / Math.sqrt(rDivisor);
    result.rSqr = Math.pow(result.r, 2);
    
    result.p = result.b0 + result.b1 * E;

    // Rounding to 6 digits after decimal
    for (let key of Object.keys(result)) {
        result[key] =  +parseFloat(result[key].toString()).toFixed(6);
    }

    return result;
};