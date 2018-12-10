/**
 *
 * @class ListNode This class keeps track of each element information
 * @template E Element type
 */
export declare class ListNode<E> {
    element: E;
    next: ListNode<E> | null;
    prev: ListNode<E> | null;
    constructor(element: E, next: ListNode<E> | null, prev: ListNode<E> | null);
}
/**
 *
 * @class TwoWayList Two way linked list class
 * @template E List type
 */
export declare class TwoWayList<E> {
    head: ListNode<E> | null;
    tail: ListNode<E> | null;
    size: number;
    static sum(list: TwoWayList<number>): number;
    static average(list: TwoWayList<number>): number;
    static mathLn(list: TwoWayList<number>): TwoWayList<number>;
    init(initValue: E[]): void;
    /**
     *
     * @returns Size of list
     * @memberof TwoWayList
     */
    getSize(): number;
    /**
     *
     *
     * @returns If list is empty
     * @memberof TwoWayList
     */
    isEmpty(): boolean;
    /**
     *
     * Adds element in the beginning of the list
     * @param {E} element Element to be added
     * @memberof TwoWayList
     */
    unshift(element: E): void;
    /**
     *
     * Adds element in the end of the list
     * @param {E} element Element to be added
     * @memberof TwoWayList
     */
    push(element: E): void;
    /**
     * this method walks forward through the linked list
     */
    iterateForward(): void;
    /**
     * this method walks backward through the linked list
     */
    iterateBackward(): void;
    /**
     *
     * Removes the first element of the list
     * @returns The removed element
     * @memberof TwoWayList
     */
    shift(): E;
    /**
     *
     * Removes the last element of the list
     * @returns The removed element
     * @memberof TwoWayList
     */
    pop(): E;
    /**
     *
     * @param fn Callback function for retrieving nodes
     * @memberof TwoWayList
     */
    forEach(fn: (node: ListNode<E>) => any): void;
}
