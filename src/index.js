import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Carrinho de compras da Shopee!");

const item1 = await createItem("Mini Projetor Portátil", 119, 1);
const item2 = await createItem("Câmera Digital Nbd 48mp/60fps", 839.95, 1);
const item3 = await createItem("Fone de ouvido Bluetooth", 29.99, 2);
const item4 = await createItem("Smartwatch Android", 28.90, 4);
const item5 = await createItem("Fone de ouvido Motorola G20", 37, 1);
const item6 = await createItem("Pen Drive USB", 19.90, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.addItem(myWishList, item5);
await cartService.addItem(myWishList, item6);

await cartService.addItemToMyCart(myWishList, item6, myCart);

await cartService.displayCart(myWishList);

await cartService.calculateTotal(myWishList);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
