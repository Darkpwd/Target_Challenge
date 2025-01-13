// Primeiro exercício do desafio!

let index = 13;
let SUM = 0;
let K = 0;

while (K < index) {
  K = K + 1;
  SUM = SUM + K;
}

console.log("O valor da nossa soma é :", SUM);

//------------------------------------------

//Segundo exercício do desafio!
const Fibonacci = (number) => {
  if (number < 0) return false; //Não pertence a sequência!

  let a = 0;
  let b = 1;

  while (a <= number) {
    if (a === number) {
      return `O número ${number} pertence à sequência da Fibonacci!`;
    }

    let nextStep = a + b;
    a = b;
    b = nextStep;
  }

  return `O número ${number} NÃO pertence à sequência da Fibonacci!`;
};

const testingFibo = 4;

console.log(Fibonacci(testingFibo)); // Resultado esperado da função 4 n é.

//--------------------------------------------------------------------------

//Terceiro exercício do desafio!

const monthlyBilling = [
  {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53,
  },
];

let total = 0;

for (const state in monthlyBilling[0]) {
  total += monthlyBilling[0][state];
}

console.log("O total de faturamento mensal foi de: ", total.toFixed(2)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

//--------------------------------------------------------

//Quarto exercício do desafio!
const inverseString = (word) => {
  let inverted = "";

  for (let i = word.length - 1; i >= 0; i--) {
    inverted += word[i];
  }

  return inverted;
};

// Testando a função
console.log(inverseString("hello"));
console.log(inverseString("JavaScript"));
