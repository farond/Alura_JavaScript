console.log(` \n*** Trabalhando com Condicionais ***`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;

const destino = "São Paulo";

listaDestinos.push(`Londres`) //add item na lista

console.log("\n*** Destinos Possiveis ***");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){    
    if(listaDestinos[contador] == destino){        
        destinoExiste = true;
        break;
    }else{
        destinoExiste;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0; cont < 3; i++){    
    if(listaDestinos[contador] == destino){        
        destinoExiste = true;
        break;
    }
   
}