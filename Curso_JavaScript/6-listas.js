console.log(` *** Trabalhando com Listas ***`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Jnaeiro`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDestinos.push(`Londres`) //add item na lista

console.log("*** Destinos Possiveis ***");
console.log(listaDestinos);

listaDestinos.splice(1 , 1);
console.log(listaDestinos);
console.log(listaDestinos[1]);