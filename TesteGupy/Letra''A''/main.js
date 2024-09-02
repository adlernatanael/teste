function contarLetraA(str) {

    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        // fiz o primeiro teste e só tinha retornado 6 'a' na minha frase pré definida, então inclui o 'á' e 'ã'
        if (str[i] === 'a' || str[i] === 'A' || str[i] === 'á' || str[i] === 'ã') {
            contador++;
        }
    }

    return contador;
}

// Teste com uma string já definida
let inputString = "JavaScript não é tão fácil, mas é bem legal para curiosos";

let contador = contarLetraA(inputString);

contador > 0 ? console.log("A letra 'a' aparece " + contador + " vezes na string."):
    console.log("A letra 'a' não aparece na string.");

// Usando operador ternário nas situações 
// para solidificar um pouco meus estudos,
// porém acho que dificulta pra entender o codigo se tiver vários.