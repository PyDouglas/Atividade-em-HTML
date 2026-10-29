
const mesa = Number(prompt("Qual o valor total da sua mesa ? "))
const pessoas =  prompt("QUantas pessoas vão rachar a conta ? ")
const total = mesa / pessoas

alert(
        "-- Resumo da conta -- \n" +
        `Consumo : R$ ${mesa.toFixed(2)} \n` +
        `Divisão por pessoa (3 pessoas): R$ ${total.toFixed(2)}`

)



