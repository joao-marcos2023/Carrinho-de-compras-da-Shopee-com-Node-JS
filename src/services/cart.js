export {addItem, displayCart, calculateTotal, deleteItem, removeItem, addItemToMyCart}

//Função adicionar item ao carrinho
async function addItem(userCart, item){
    userCart.push(item);
};

//Função adicionar item da lista de desejo ao carrinho
async function addItemToMyCart(userCart, item, otherCart){
    const index = userCart.findIndex((p)=> p.name === item.name);
    if(index !== -1){
        userCart.splice(index, 1);
    }else{
        console.log("❌ Item não encontrado!");
    }

    otherCart.push(item)

}

//Função total do carrinho
async function calculateTotal(userCart){
    console.log("\nValor TOTAL do carrinho: ");
    const result = userCart.reduce((total, item)=> total + item.subtotal, 0);
    console.log(`🛒 Total R$: ${result.toFixed(2)}`);
};


//Função excluir item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    };
    return displayCart(userCart);
}


//Função remover item do carrinho
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((product)=> product.name === item.name);

    if(indexFound == -1){
        console.log("❌ Item não encontrado!");
        return;
    };

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        userCart[indexFound].subtotal -= userCart[indexFound].price;
        return;
    };

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        
        return;
    };


}


//Função display do carrinho
async function displayCart(userCart){
    console.log("\nLista do carrinho de compras: \n");
    userCart.forEach((item, i)=>{
        console.log(`${i + 1}. ${item.name} - R$: ${item.price} | QTD: ${item.quantity}X | Total R$ ${item.subtotal.toFixed(2)}\n`);
    });
};

