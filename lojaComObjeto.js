let nomeDoProduto = document.getElementById ('nomeDoProduto');
let valorProduto = document.getElementById ('valorDoProduto');
let valorcarrinho = document.getElementById('valorcarrinho')
//chamadas

let carrinho = [];
let totalcarrinho = Number();
let controle = 0;
let totalItens = 0;

function frutaEscolhida(nomeDoProduto){
     nomeDoProduto = nomeDoProduto.value.toLowerCase();

if(nomeDoProduto == 'banana'){
    return `O valor do item ${nomeDoProduto} é R$5,99`
}
if(nomeDoProduto == 'laranja'){
    return `O valor do item ${nomeDoProduto} é R$4,29`
}
if(nomeDoProduto == 'maca'){
    return `O valor do item ${nomeDoProduto} é R$7,89`
}
if(nomeDoProduto == 'abacate'){
    return `O valor do item ${nomeDoProduto} é R$6,00`
}
if(nomeDoProduto == 'pera'){
    return `O valor do item ${nomeDoProduto} é R$4,5`
}
}

valores = () => {
     valorProduto.innerHTML = (frutaEscolhida(nomeDoProduto))
}

function addCarrinho(){
let produto;

if(nomeDoProduto.value.toLowerCase() == 'banana'){
    produto = {
        nome:nomeDoProduto.value.toLowerCase(),
        preco:5.99
    }
    totalItens ++

}else if(nomeDoProduto.value.toLowerCase() == 'laranja'){
    produto = {
        nome:nomeDoProduto.value.toLowerCase(),
        preco: 4.98
    }
    totalItens ++
}else if(nomeDoProduto.value.toLowerCase() == 'maca'){
    produto = {
        nome:nomeDoProduto.value.toLowerCase(),
        preco: 5.25
    }
    totalItens ++
}else if(nomeDoProduto.value.toLowerCase() == 'abacate'){
    produto = {
        nome:nomeDoProduto.value.toLowerCase(),
        preco: 8
    }
    totalItens ++
}else if(nomeDoProduto.value.toLowerCase() == 'pera'){
    produto = {
        nome:nomeDoProduto.value.toLowerCase(),
        preco: 7.75
    }
    totalItens ++
}else{
    produto = 0
    controle ++
}
carrinho.push(produto)
}
