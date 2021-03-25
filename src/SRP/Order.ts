import { OrderStats } from './interfaces/OrderStats';
import { ShoppingCart } from './Shopping_Cart';

export class Order {
    private _orderStats: OrderStats = "open";
    private readonly cart: ShoppingCart

    constructor(cart: ShoppingCart) {
        this.cart = cart;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("Your cart is empty!");
            return;
        }

        this.orderStats = "closed";
        this.sendMessage(`Your order with total of R$${this.cart.total()} were received!`);
        this.saveOrder();
        this.cart.clear();
    }

    sendMessage(msg: string) {
        console.log("Message sended:", msg);
    };

    saveOrder(): void {
        console.log("Order saved successfully!");
    }

    set orderStats(stats: OrderStats) {
        this._orderStats = stats;
    }

    get orderStats(): OrderStats {
        return this._orderStats;
    }
}
