# Gilded Rose Kata

## Background

The Gilded Rose is a famous kata (or exercise) in OO, testing, and refactoring legacy code. This branch contains a fully refactored solution that replaces the original 40-line conditional with composable item types and an expressive inventory API.

## Project Structure

- **`src/items`** – Specialized item classes (`NormalItem`, `AgedBrie`, `BackstagePass`, `ConjuredItem`, `LegendaryItem`) encapsulate each rule in the kata.
- **`src/ItemFactory.js`** – Chooses the correct item implementation based on an item's name (with support for any "Conjured" variant).
- **`src/GildedRose.js`** – Inventory façade responsible for updating every item in the store while maintaining compatibility with the kata's legacy constructor.
- **`test/GildedRose.test.js`** – Comprehensive Mocha/Chai test suite covering every item category, edge case, and the inventory façade.

## Usage

```js
const { GildedRose, createItem } = require('./GildedRose');

const inventory = new GildedRose([
  createItem('normal', 10, 5),
  createItem('Aged Brie', 0, 2),
]);

inventory.tick(); // updates every item in place
```

The `GildedRose` constructor also supports the kata's legacy positional signature for working with a single item: `new GildedRose('normal', 5, 0)`.

## Development Workflow

1. Install dependencies with `npm install`.
2. Run the full test suite with `npm test`.
3. Add new rules by creating an item class in `src/items` and registering it with the factory.

## Additional Resources

- [Original Description of Gilded Rose](https://codingdojo.org/kata/gilded-rose/)
- [Sandi Metz – "All the Little Things"](https://www.youtube.com/watch?v=8bZh5LMaSmE)
