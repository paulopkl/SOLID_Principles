import { Item } from './interfaces/Item';

export class ShoppingCart {
    private readonly _items: Item[] = [];

    addItem(item: Item): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    total(): number {
        return parseFloat(this._items.reduce((total, item) => total += item.price, 0).toFixed(2));
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        if(this._items.length !== 0) {
            console.log("ShoppingCart was cleaned!");
            this._items.length = 0;
        }
    }

    // get items(): Item[] {
    get items(): Readonly<Item[]> {
        return this._items;
    }
}