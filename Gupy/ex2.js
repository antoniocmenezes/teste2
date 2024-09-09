function isFibonacci(n) {
    //Calcular a sequência de Fibonacci até o número 'n'
    function fibonacciSequence(upTo) {
        let sequence = [0, 1];
        while (true) {
            let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
            if (next > upTo) break;
            sequence.push(next);
        }
        return sequence;
    }

    //Gerar a sequência de Fibonacci até o número fornecido
    let fibSequence = fibonacciSequence(n);

    
    if (fibSequence.includes(n)) {
        return `${n} pertence à sequência de Fibonacci.`;
    } else {
        return `${n} não pertence à sequência de Fibonacci.`;
    }
}


const numberToCheck = 21;
console.log(isFibonacci(numberToCheck));
