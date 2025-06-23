let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlert() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Cite uma cidade do Brasil: ');
    alert('Estive em ' + cidade + ' e lembrei de você.');
}

function botaoSoma() {
    let num1 = parseInt(prompt('Digite um número: '));
    let num2 = parseInt(prompt('Digite outro número: '));
    let soma = num1 + num2;
    alert(`A soma de ${num1} e ${num2} é igual a ${soma}.`);
}