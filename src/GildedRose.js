const ItemFactory = require('./ItemFactory');

class GildedRose {
    constructor(items = []) {
        if (!Array.isArray(items)) {
            this.items = [this.wrapArguments(arguments)];
        } else {
            this.items = items.map((item) => this.wrapItem(item));
        }
    }

    wrapArguments(args) {
        const [name, quality, daysRemaining] = Array.from(args);
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string when using positional arguments.');
        }
        return ItemFactory.create(name, quality, daysRemaining);
    }

    wrapItem(item) {
        if (item && typeof item.tick === 'function') {
            return item;
        }

        if (!item || typeof item.name !== 'string') {
            throw new TypeError('Expected an item with a name, quality, and daysRemaining.');
        }

        return ItemFactory.create(item.name, item.quality, item.daysRemaining);
    }

    tick() {
        this.items.forEach((item) => item.tick());
        return this.items;
    }

    addItem(item) {
        const wrapped = this.wrapItem(item);
        this.items.push(wrapped);
        return wrapped;
    }
}

module.exports = GildedRose;
