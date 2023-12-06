alert("boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);

let chute = prompt('escolha um numero entre 1 e 7');


if (chute == numeroSecreto) {
    console.log(`Isso ai você acertou o número secreto é  ${numeroSecreto}` )
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
} else {
        alert(`O número secreto é maior que ${chute}`);
}

}
