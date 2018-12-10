import {TwoWayList} from '../Task1/twoWayBindedList';

const calculateAverage = (list: TwoWayList<number>) => {
    const lnList = TwoWayList.mathLn(list);

    return TwoWayList.average(lnList);
};

const calculateVariance = (list: TwoWayList<number>, avg: number) => {
    const lnList = TwoWayList.mathLn(list);
    const sqrLnMinusAvg: number[] = [];
    const tmpList = new TwoWayList<number>();
    let result = 0;

    lnList.forEach((node) => {
        const item = Math.pow(node.element - avg, 2);
        sqrLnMinusAvg.push(item);
    });

    tmpList.init(sqrLnMinusAvg);

    result = TwoWayList.sum(tmpList);
    result /= (lnList.getSize() - 1);
    result = Math.sqrt(result);

    return result;
};

export const getRelativeSizes = (list: TwoWayList<number>) => {
    const avg = calculateAverage(list);
    const variance = calculateVariance(list, avg);
    const antiLN = (value: number) => {
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
