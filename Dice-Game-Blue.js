const prompt = require("prompt-sync")();

console.log("Dice Game Blue");
console.log();
console.log("Olá vamos Jogar Dice Game Blue ? Legal vou te explicar rapidinho como funciona, primeiro você deve escolher quantas rodadas e depois quantos jogadores, ai é só ver quem foi o grande campeão!!! Bom Jogo !!!");
console.log();

rodadas = +prompt("Digite quantas Rodadas: ");
console.log();

let qtJogadores = +prompt("Digite quantos jogadores vão jogar: ");
console.log();

var jogadores = []

for (let i = 0; i < qtJogadores; i++){
  nomeJg = prompt("Digite o nome do Jogador: ");
  console.log();
  jogadores.push({nomeJg, vitorias: 0, jogadas:[]})

  for (let b = 0; b < rodadas; b++){
    jogadores[i].jogadas.push(Math.floor(Math.random() * (6)) + 1,);
  }
}

for (let i = 0; i < rodadas; i++){
  var maiorNumero = 0;
  var vencedor = {};

  for (let b = 0; b < qtjogadores; b++){

    if (jogadores[b].jogadas[i] > maiorNumero){
      maiorNumero = jogadores[b].jogadas[i];
      vencedor = jogadores[b];      
    }
  }

  jogadores[jogadores.indexOf(vencedor)].vitorias++;  
  console.log(`O vencedor da ${i + 1}ª é: ${vencedor.nomeJg}`);  
}

jogadores.sort((a, b) => b.vitorias - a.vitorias);

var vitoriaTxt = jogadores[0].vitorias > 1 ? "vitorias" : "vitoria";

console.log();
console.log(`O grande vencedor é ${jogadores[0].nomeJg} com ${jogadores[0].vitorias} ${vitoriaTxt}`);