import { Item } from './Item'

export class Passes extends Item {
    constructor(quality: number, daysRemaining: number) {
        super(quality, daysRemaining);
    }

    static get itemName():string {
        return 'Backstage passes to a TAFKAL80ETC concert';
    }

    tick():void {
        this.daysRemaining--;
        this.quality = Math.min(50, this.quality + 3);
        if (this.daysRemaining < 0) this.quality = 0;
    }
}
