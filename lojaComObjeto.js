let nomeDoProduto = document.getElementById ('nomeDoProduto');
let valorProduto = document.getElementById ('valorDoProduto');
let valorCarrinho = document.getElementById('valorCarrinho')

//chamadas
validadorDeNome = () => {return nomeDoProduto.value.toLowerCase()};     
//aerofunction
let carrinho = [];
let totalcarrinho = Number();
let controle = 0;
let totalItens = 0;

function frutaEscolhida(){

if(validadorDeNome() == 'banana'){
    return `O valor do item ${validadorDeNome()} é R$5,99`
}
if(validadorDeNome() == 'laranja'){
    return `O valor do item ${validadorDeNome()} é R$4,29`
}
if(validadorDeNome() == 'maca'){
    return `O valor do item ${validadorDeNome()} é R$7,89`
}
if(validadorDeNome() == 'abacate'){
    return `O valor do item ${validadorDeNome()} é R$6,00`
}
if(validadorDeNome() == 'pera'){
    return `O valor do item ${validadorDeNome()} é R$4,5`
}
}

valores = () => {
     valorProduto.innerHTML = (frutaEscolhida())
}

function addCarrinho(){
let produto;

if(validadorDeNome() == 'banana'){
    produto = {
        nome:validadorDeNome(),
        preco:5.99
    }
    totalItens ++

}else if(validadorDeNome() == 'laranja'){
    produto = {
        nome:validadorDeNome(),
        preco: 4.98
    }
    totalItens ++
}else if(validadorDeNome() == 'maca'){
    produto = {
        nome:validadorDeNome(),
        preco: 5.25
    }
    totalItens ++
}else if(validadorDeNome() == 'abacate'){
    produto = {
        nome:validadorDeNome(),
        preco: 8
    }
    totalItens ++
}else if(validadorDeNome() == 'pera'){
    produto = {
        nome:validadorDeNome(),
        preco: 7.75
    }
    totalItens ++
}else{
    produto = 0
    controle ++
}

carrinho.push(produto)
console.log(carrinho)

if (carrinho !=0){
 for (i=controle; i<carrinho.length; i++){
    totalcarrinho += carrinho[i].preco
    controle ++




}
}else{
    valorCarrinho.innerHTML = ('Carrinho vazio')
}
}

function totalCompra(){
    if(totalcarrinho !=0){
    valorCarrinho.innerHTML = `Total de itens no carrinho: ${totalItens}<br>Valor Total: R$${totalcarrinho.toFixed(2)}`
}else{
  valorCarrinho.innerHTML = "Carrinho Vazio"

}
}
