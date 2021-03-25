type Item = { name: string, price: number };

type OrderStats = "open" | "closed";

export class ShoppingCartLegacy {
    private readonly _items: Item[] = [];
    private _orderStats: OrderStats = "open";

    addItem(item: Item): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    total(): number {
        return parseFloat(this._items.reduce((total, item) => total += item.price, 0).toFixed(2));
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log("Your cart is empty!");
            return;
        }

        this.orderStats = "closed";
        this.sendMessage(`Your order with total of R$${this.total()} were received!`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string) {
        console.log("Message sended:", msg);
    };

    saveOrder(): void {
        console.log("Order saved successfully!");
    }

    clear(): void {
        if(this._items.length !== 0) {
            console.log("ShoppingCart was cleaned!");
            this._items.length = 0;
        }
    }

    set orderStats(stats: OrderStats) {
        this._orderStats = stats;
    }

    get orderStats(): OrderStats {
        return this._orderStats;
    }

    // get items(): Item[] {
    get items(): Readonly<Item[]> {
        return this._items;
    }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: "T-shirt", price: 78  });
shoppingCart.addItem({ name: "Shoes", price: 49.00  });
shoppingCart.addItem({ name: "Pencil", price: 1.99  });

// console.log(shoppingCart.items.push({ name: "batata", price: 100 }));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
// shoppingCart.clear();
shoppingCart.checkout();
console.log(shoppingCart.orderStats);
