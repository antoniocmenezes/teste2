const fs = require('fs');

const rawData = fs.readFileSync('dados.json');
const dados = JSON.parse(rawData);

let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;
let somaFaturamento = 0;
let contagemDias = 0;

dados.forEach(item => {
    if (item.valor > 0) {
        
        if (item.valor < menorFaturamento) {
            menorFaturamento = item.valor;
        }
        if (item.valor > maiorFaturamento) {
            maiorFaturamento = item.valor;
        }

        somaFaturamento += item.valor;
        contagemDias++;
    }
});

const mediaMensal = somaFaturamento / contagemDias;

const diasAcimaDaMedia = dados.filter(item => item.valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
