console.log(` *** Trabalhando com Condicionais ***`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

listaDestinos.push(`Londres`) //add item na lista

console.log("*** Destinos Possiveis ***");
console.log(listaDestinos);

/* if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDestinos.splice(1, 1); //removendo item da lista
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDestinos.splice(1, 1); //removendo item da lista    
} else {//pessoa é menor de idade    
    console.log("Não é maior de idade e não posso vender");
} */

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Passagem vendida com sucesso!!!");
    listaDestinos.splice(1, 1); //removendo item da lista
} else {//pessoa é menor de idade    
    console.log("A venda não poderá ser feita comprador não é maior de idade!");
}

console.log(listaDestinos);
console.log("\nEmbarcando \n");
if ((idadeComprador >= 18 || estaAcompanhada) && temPassagemComprada){
    console.log("Tudo certo pode embarcar, Boa Viagem!");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDestinos);


