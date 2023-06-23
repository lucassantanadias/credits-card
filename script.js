//imask é o nome da biblioteca (só funciona se o input for tipo text)
//no argumento, eu coloco qual o campo eu quero aplicar a máscara
//vou aplicar no campo do CVV
// '#cc-cvv" é o id do campo
//'document.querySelector' é a maneira do js pegar o input no html
//após o argumento com o id, coloca uma vírgula e abre um objeto no js
//os zeros são as quantidades de caracteres que eu posso colocar
//atentar para a letra 'I' e 'M' estarem maiúsculas, senão o código não funciona
IMask(document.querySelector("#cc-cvv"), {
  mask: "0000",
})

IMask(document.querySelector("#cc-number"), {
  mask: "0000 0000 0000 0000",
})

//o preocesso de colocar data é diferente:
//"MM{/}YY tem que deixar o traço entre parêntese"
//blocks são blocos que eu coloquei o mês e ano dentro

/*MM recebe a classe "MaskedRange" para definir um limite: o mês começa no 1 e vai até 12*/

/*YY é diferente: new date().get FullYear() vai me retornar o ano atual 
(me retornou 2023, o ano que eu fiz o cartão, não vai me retornar anos anteriores, e não permite numeros antes de 23.), mas eu preciso dos dois últimos caracteres, o slice é responsável por fazer isso, então eu transformo tudo em uma string. o 'to' é o limite final, os cartões tem limites de 10 anos, geralmente, então eu coloco +10 para ele somar 10 anos*/

IMask(document.querySelector("#cc-validity"), {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
})

//não fez parte da aula, mas eu quis testar
const button = document.querySelector("button")

button.addEventListener("click", adicionar)
function adicionar() {
  alert("Cartão adicionado.")
}
