// a) 1, 3, 5, 7, ___

let sequenciaA = [1, 3, 5, 7];
let nextA = sequenciaA[sequenciaA.length - 1] + 2;
console.log("a) " + nextA); // 9

// b) 2, 4, 8, 16, 32, 64, ____

let sequenciaB = [2, 4, 8, 16, 32, 64];
let nextB = sequenciaB[sequenciaB.length - 1] * 2;
console.log("b) " + nextB); // 128

// c) 0, 1, 4, 9, 16, 25, 36, ____

let sequenciaC = [0, 1, 4, 9, 16, 25, 36];
let nextC = (sequenciaC.length) * (sequenciaC.length); // quadrado do próximo número
console.log("c) " + nextC); // 49

// d) 4, 16, 36, 64, ____

let sequenciaD = [4, 16, 36, 64];
let nextD = ((sequenciaD.length + 1) * 2) ** 2; // quadrado do próximo número par
console.log("d) " + nextD); // 100

// e) 1, 1, 2, 3, 5, 8, ____

let sequenciaE = [1, 1, 2, 3, 5, 8];
let nextE = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2]; // soma dos dois últimos números
console.log("e) " + nextE); // 13

// f) 2, 10, 12, 16, 17, 18, 19, ____

let sequenciaF = [2, 10, 12, 16, 17, 18, 19];
let nextF = sequenciaF[sequenciaF.length - 1] + 1;
console.log("f) " + nextF); // 20
