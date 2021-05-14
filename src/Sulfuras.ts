import { Item } from './Item'

export class Sulfuras extends Item {
    constructor(quality: number, daysRemaining: number) {
        super(quality, daysRemaining);
    }

    static get itemName():string {
        return 'Sulfuras, Hand of Ragnaros';
    }
}
