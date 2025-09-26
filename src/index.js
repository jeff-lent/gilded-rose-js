const GildedRose = require('./GildedRose');
const ItemFactory = require('./ItemFactory');
const items = require('./items');

const createItem = (name, quality, daysRemaining) => ItemFactory.create(name, quality, daysRemaining);

module.exports = {
    GildedRose,
    ItemFactory,
    createItem,
    items,
};
