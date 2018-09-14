export class SetPrice {
    constructor() {}

    calculateFknPrice(startPrice: number, state: string) {
        const tax = Math.random();

        return startPrice + tax;
    }
}
