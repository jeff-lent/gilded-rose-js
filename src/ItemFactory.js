const {
    AgedBrie,
    BackstagePass,
    ConjuredItem,
    LegendaryItem,
    NormalItem,
} = require('./items');

const ITEM_MATCHERS = [
    { test: (name) => name === 'Aged Brie', create: (props) => new AgedBrie(props) },
    {
        test: (name) => name === 'Backstage passes to a TAFKAL80ETC concert',
        create: (props) => new BackstagePass(props),
    },
    { test: (name) => name === 'Sulfuras, Hand of Ragnaros', create: (props) => new LegendaryItem(props) },
    { test: (name) => /^Conjured/i.test(name), create: (props) => new ConjuredItem(props) },
];

class ItemFactory {
    static create(name, quality, daysRemaining) {
        const props = { name, quality, daysRemaining };
        const matcher = ITEM_MATCHERS.find(({ test }) => test(name));

        if (matcher) {
            return matcher.create(props);
        }

        return new NormalItem(props);
    }
}

module.exports = ItemFactory;
