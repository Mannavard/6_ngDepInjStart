import { SetPrice  } from './price-set.service';

export class Product {
    service: SetPrice;
    startPrice: number;

    constructor(startPrice: number) {
        this.service = new SetPrice();
        this.startPrice = startPrice;
    }

    totalPrice() {
        return true;
    }
}
