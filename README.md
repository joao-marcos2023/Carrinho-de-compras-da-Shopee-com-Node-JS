# Carrinho de compras da Shopee com Node JS

## Projeto desenvolvido baseado no desafio proposto pelo curso Node Fundamentals da DIO

### 💻 Tecnologias

<div>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="80" alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="80" alt="nodejs logo"/>
</div>

### 🔍 Observações

O projeto traz as funcionalidades de um carrinho de compras de um e-commerce, tais como adicionar item ao carrinho,
removê-lo, diminuir a quantidade de itens e exibir o valor total dos produtos.

Foi desenvolvido com **JavaScript** e com a ferramenta **Node JS** como parte do meu aprendizado em programação **back-end**.
Tive a oportunidade de pôr em prática o que aprendi com **modularização de projetos Node.js com** **EcmaScript Modules**. 

## ⚡ Novas funcionalidades

Do projeto base acrescentei uma nova funcionalidade:

1️⃣ Adicionar um item da lista de desejos para o carrinho de compras

Para realizar essa operação aproveitei a lógica de procurar o item pelo seu índice e removê-lo do array onde estava e depois
adicioná-lo ao novo array, no caso o carrinho de compras.

A função passa a ter como parâmetros o array de onde item será removido, o item e o novo array onde ele será adicionado:

```
async function addItemToMyCart(userCart, item, otherCart){
    const index = userCart.findIndex((p)=> p.name === item.name); //Encontra item pelo índice
    if(index !== -1){
        userCart.splice(index, 1); //Remove item do array (da lista de desejos)
    }else{
        console.log("❌ Item não encontrado!");
    }

    otherCart.push(item) //Adiciona item ao novo array (carrinho de compras)

```

**Além disso, corrigi a função que remove itens do carrinho de modo que além da quantidade diminua conforme a remoção, o valor**
**do mesmo acompanhe. Assim, será exibido corretamente o item, preço, quantidade e valor total.**

Essa correção pode ser vista no trecho a seguir:

```
userCart[indexFound].subtotal -= userCart[indexFound].price;

```

