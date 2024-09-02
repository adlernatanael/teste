function Fibonacci(num) {

    let a = 0, b = 1, nextTerm;

    // Verifica se o número é 0 ou 1, que são parte da sequência de Fibonacci
    if (num === 0 || num === 1) {
        return true;
    }

    while (b < num) {
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return b === num;
}

// Teste com um número fixo
let num = 21;

Fibonacci(num) ? console.log(num + " pertence à sequência de Fibonacci."):
    console.log(num + " não pertence à sequência de Fibonacci.");
