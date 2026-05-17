import { makeAutoObservable } from "mobx";

export default class CounterStore {
    title = 'Counter Store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this)
    }

    increment = (i = 1) => {
        this.count += i;
        this.events.push(`Incremented by ${i} - count is now ${this.count}`);
    }
    
    decrement = (i = 1) => {
        this.count -= i;
        this.events.push(`Decremented by ${i} - count is now ${this.count}`);
    }

    get eventCount() {
        return this.events.length
    }
}