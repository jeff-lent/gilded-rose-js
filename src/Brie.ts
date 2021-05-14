
import {Item} from './Item'

export class Brie extends Item {
    constructor(quality: number, daysRemaining: number) {
        super(quality, daysRemaining);
    }

    static get itemName():string {
        return 'Aged Brie';
    }

    tick():void {
        this.daysRemaining--;
        if (this.quality >= 50) return;
        this.quality++;
        if (this.daysRemaining < 0) this.quality++;
    }
}
