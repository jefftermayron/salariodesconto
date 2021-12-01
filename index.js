var prompt = require('prompt-sync')()

var salarioBruto = prompt('Digite seu salario bruto: ')
var salarioLiquido;

if (salarioBruto <= 1556.94){
  salarioLiquido = salarioBruto - (salarioBruto * 0.08)
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioLiquido = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioLiquido = salarioBruto - (salarioBruto * 0.11)
} else if(salarioBruto >= 5189.83){
  salarioLiquido = salarioBruto - 570.88
}

console.log('Seu salário líquido é de ' + salarioLiquido)