import {TwoWayList} from './twoWayBindedList';

export const standardDeviation = (list: TwoWayList<number>, mean: number): number => {
    let result = 0;

    // Calculates (Xi - Xavg)^2
    list.forEach((node) => {
        const currentXiXavgSqr = Math.pow((node.element - mean), 2);
        
        result += currentXiXavgSqr;
    });
    // Calculates sqrt(result/n-1)
    result /= list.getSize() - 1;
    result = Math.sqrt(result);

    return result;
};