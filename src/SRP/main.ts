import { Order } from './Order';
import { ShoppingCart } from './Shopping_Cart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);

shoppingCart.addItem({ name: "T-shirt", price: 78  });
shoppingCart.addItem({ name: "Shoes", price: 49.00  });
shoppingCart.addItem({ name: "Pencil", price: 1.99  });

// console.log(shoppingCart.items.push({ name: "batata", price: 100 }));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
// shoppingCart.clear();
console.log(order.orderStats);
order.checkout();
console.log(order.orderStats);