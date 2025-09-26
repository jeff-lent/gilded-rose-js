const { expect } = require('chai');

const { GildedRose, createItem } = require('../GildedRose');

const tickItem = (item, days = 1) => {
    for (let i = 0; i < days; i += 1) {
        item.tick();
    }
    return item;
};

describe('Gilded Rose Inventory', () => {
    it('updates all items in the store when ticking the inventory', () => {
        const inventory = new GildedRose([
            createItem('normal', 10, 5),
            createItem('Aged Brie', 0, 2),
        ]);

        const items = inventory.tick();

        expect(items[0]).to.include({ name: 'normal', quality: 9, daysRemaining: 4 });
        expect(items[1]).to.include({ name: 'Aged Brie', quality: 1, daysRemaining: 1 });
    });

    it('accepts plain item descriptions and wraps them automatically', () => {
        const inventory = new GildedRose([
            { name: 'normal', quality: 10, daysRemaining: 5 },
        ]);

        const [item] = inventory.tick();

        expect(item).to.include({ name: 'normal', quality: 9, daysRemaining: 4 });
    });

    it('supports the legacy positional constructor signature for a single item', () => {
        const inventory = new GildedRose('normal', 5, 0);
        const [item] = inventory.tick();

        expect(item).to.include({ name: 'normal', quality: 3, daysRemaining: -1 });
    });
});

describe('Normal items', () => {
    it('lose one quality per day before the sell date', () => {
        const item = createItem('normal', 10, 5);
        tickItem(item);

        expect(item).to.include({ quality: 9, daysRemaining: 4 });
    });

    it('never drop below zero quality', () => {
        const item = createItem('normal', 0, 5);
        tickItem(item);

        expect(item.quality).to.equal(0);
    });

    it('degrade twice as fast after the sell date', () => {
        const item = createItem('normal', 10, 0);
        tickItem(item);

        expect(item).to.include({ quality: 8, daysRemaining: -1 });
    });
});

describe('Aged Brie', () => {
    it('gains quality as it ages', () => {
        const item = createItem('Aged Brie', 10, 5);
        tickItem(item);

        expect(item).to.include({ quality: 11, daysRemaining: 4 });
    });

    it('never exceeds a quality of 50', () => {
        const item = createItem('Aged Brie', 50, 10);
        tickItem(item);

        expect(item.quality).to.equal(50);
    });

    it('gains quality twice as fast after the sell date', () => {
        const item = createItem('Aged Brie', 10, 0);
        tickItem(item);

        expect(item).to.include({ quality: 12, daysRemaining: -1 });
    });
});

describe('Backstage passes', () => {
    it('increase in quality by 1 when the concert is more than 10 days away', () => {
        const item = createItem('Backstage passes to a TAFKAL80ETC concert', 10, 15);
        tickItem(item);

        expect(item).to.include({ quality: 11, daysRemaining: 14 });
    });

    it('increase in quality by 2 when the concert is 10 days away', () => {
        const item = createItem('Backstage passes to a TAFKAL80ETC concert', 10, 10);
        tickItem(item);

        expect(item).to.include({ quality: 12, daysRemaining: 9 });
    });

    it('increase in quality by 3 when the concert is 5 days away', () => {
        const item = createItem('Backstage passes to a TAFKAL80ETC concert', 10, 5);
        tickItem(item);

        expect(item).to.include({ quality: 13, daysRemaining: 4 });
    });

    it('drop to zero quality after the concert', () => {
        const item = createItem('Backstage passes to a TAFKAL80ETC concert', 30, 0);
        tickItem(item);

        expect(item).to.include({ quality: 0, daysRemaining: -1 });
    });

    it('never exceeds the maximum quality', () => {
        const item = createItem('Backstage passes to a TAFKAL80ETC concert', 49, 5);
        tickItem(item);

        expect(item.quality).to.equal(50);
    });
});

describe('Sulfuras, Hand of Ragnaros', () => {
    it('never changes in quality or sell by date', () => {
        const item = createItem('Sulfuras, Hand of Ragnaros', 80, 0);
        tickItem(item, 5);

        expect(item).to.include({ quality: 80, daysRemaining: 0 });
    });
});

describe('Conjured items', () => {
    it('degrade twice as fast before the sell date', () => {
        const item = createItem('Conjured Mana Cake', 10, 5);
        tickItem(item);

        expect(item).to.include({ quality: 8, daysRemaining: 4 });
    });

    it('degrade four times as fast after the sell date', () => {
        const item = createItem('Conjured Mana Cake', 10, 0);
        tickItem(item);

        expect(item).to.include({ quality: 6, daysRemaining: -1 });
    });

    it('never drops below zero', () => {
        const item = createItem('Conjured Mana Cake', 3, 0);
        tickItem(item);

        expect(item.quality).to.equal(0);
    });
});
