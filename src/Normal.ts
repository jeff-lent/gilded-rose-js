
import { Item } from './Item'

export class Normal extends Item {
    constructor(quality: number, daysRemaining: number) {
        super(quality, daysRemaining);
    }

    static get itemName():string {
      return 'normal';
    }

    tick():void {
        this.daysRemaining--;
        if (this.quality === 0) return;
        this.quality--;
        if (this.daysRemaining < 0) this.quality--;
    }
}
