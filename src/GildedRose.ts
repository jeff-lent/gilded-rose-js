import {Normal} from './Normal';
import {Brie} from './Brie';
import {Sulfuras} from './Sulfuras';
import {Passes} from './Passes';
import {Item} from './Item';

const itemTypes = [Normal, Brie, Sulfuras, Passes];

export class GildedRose {
    item: Item;
    constructor(name:string, quality:number, daysRemaining:number) {
        this.item = this.classFor(name, quality, daysRemaining);
    }

    classFor(name:string, quality:number, daysRemaining:number):Item {
        const Item = itemTypes.filter(i => i.itemName === name)[0];
        return new Item(quality, daysRemaining);
    }

    tick():void {
        this.item.tick();
    }

    get name():string {
        return typeof this.item;
    }

    get quality():number {
        return this.item.quality;
    }

    get daysRemaining():number {
        return this.item.daysRemaining;
    }

}
