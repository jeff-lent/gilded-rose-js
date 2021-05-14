export class Item {
  quality: number;
  daysRemaining: number;
  constructor(quality: number, daysRemaining: number) {
      this.quality = quality;
      this.daysRemaining = daysRemaining;
  }

  static get itemName():string | never {
      throw new Error('Cannot instantiate abstract base class');
  }

  tick() {
  }
}
