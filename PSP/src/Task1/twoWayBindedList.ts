import chalk from 'chalk';

/**
 *
 * @class ListNode This class keeps track of each element information
 * @template E Element type
 */
export class ListNode<E> {
    public element: E;
    public next: ListNode<E> | null;
    public prev: ListNode<E> | null;

    constructor (element: E, next: ListNode<E> | null, prev: ListNode<E> | null) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}

/**
 *
 * @class TwoWayList Two way linked list class
 * @template E List type
 */
export class TwoWayList<E> {
 
    public head: ListNode<E> | null = null;
    public tail: ListNode<E> | null= null;
    public size: number = 0;

    public static sum(list: TwoWayList<number>) {
        let sum = 0;

        list.forEach((node) => sum += node.element);

        return sum;
    }

    public static average(list: TwoWayList<number>) {
        let avg = TwoWayList.sum(list);

        avg /= list.getSize();

        return avg;
    }

    public static mathLn(list: TwoWayList<number>) {
        const res = new TwoWayList<number>();
        const initArr: number[] = [];

        list.forEach((node) => initArr.push(Math.log(node.element)));

        res.init(initArr);
        return res;
    }

    public init(initValue: E[]) {
        initValue.forEach((val) => this.push(val));
    }

    /**
     *
     * @returns Size of list
     * @memberof TwoWayList
     */
    public getSize() { return this.size; }
     
    /**
     *
     *
     * @returns If list is empty
     * @memberof TwoWayList
     */
    public isEmpty() { return this.size === 0; }
        
    /**
     *
     * Adds element in the beginning of the list
     * @param {E} element Element to be added
     * @memberof TwoWayList
     */
    public unshift(element: E) {
        const tmp = new ListNode(element, this.head, null);
        if(this.head !== null ) {this.head.prev = tmp;}
        this.head = tmp;
        if(this.tail === null) { this.tail = tmp;}
        this.size++;
    }
     
    /**
     *
     * Adds element in the end of the list
     * @param {E} element Element to be added
     * @memberof TwoWayList
     */
    public push(element: E) {
         
        const tmp = new ListNode(element, null, this.tail);
        if(this.tail !== null) {this.tail.next = tmp;}
        this.tail = tmp;
        if(this.head === null) { this.head = tmp;}
        this.size++;
    }
     
    /**
     * this method walks forward through the linked list
     */
    public iterateForward(){
         
        let tmp = this.head;
        while(tmp !== null){
            tmp = tmp.next;
        }
    }
     
    /**
     * this method walks backward through the linked list
     */
    public iterateBackward(){

        let tmp = this.tail;
        while(tmp !== null){
            tmp = tmp.prev;
        }
    }
     
    /**
     *
     * Removes the first element of the list
     * @returns The removed element
     * @memberof TwoWayList
     */
    public shift() {
        if (this.size === 0 || this.head === null) {
            console.log(chalk.red("Error, no such element"));
            return null;
        }
        const tmp = this.head;
        this.head = this.head.next as ListNode<E>;
        this.head.prev = null;
        this.size--;
        return tmp.element;
    }
     
    /**
     *
     * Removes the last element of the list
     * @returns The removed element
     * @memberof TwoWayList
     */
    public pop() {
        if (this.size === 0 || this.tail === null) {
            console.log(chalk.red("Error, no such element"));
            return null;    
        }
        const tmp = this.tail;
        this.tail = this.tail.prev as ListNode<E>;
        this.tail.next = null;
        this.size--;
        return tmp.element;
    }

    /**
     *
     * @param fn Callback function for retrieving nodes
     * @memberof TwoWayList
     */
    public forEach(fn: (node: ListNode<E>) => any) {
        let tmp = this.head;
        while (tmp !== null) {
            fn(tmp);
            tmp = tmp.next;
        }
    }
}

// Testing two-way linked class
// const main = () => {
        
//     const dll = new TwoWayList<number>();
//     dll.unshift(10);
//     dll.unshift(34);
//     dll.push(56);
//     dll.push(364);
//     dll.push(707);
//     dll.iterateForward();
//     dll.shift();
//     dll.pop();
//     dll.iterateBackward();
// }

// main();