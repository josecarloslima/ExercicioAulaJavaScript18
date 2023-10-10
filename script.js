function adNumero() {
    let num = document.getElementById('ndigit').value // Obtendo o valor do input
    let res = document.getElementById('numins')

    // Tratamento de erros
    if (num > 100) {
        alert('Valor digitado maior que 100.')
    } else if ((num == 0) || (num == '')) {
        alert('Nenhum valor digitado. O valor 0 é um valor inválido.')
    } else if ([...res.options].some(option => option.value === num)) {
        alert('Valor já digitado.');
    } else{

        // Adição de um número no Array
    let novoElemento = document.createElement('option');
    novoElemento.text = num;

    res.add(novoElemento); // Adicionando o novo elemento à lista 
    }

    // Manter a caixa de entrada de valores (fnum) limpa
    num.value = ''
    num.focus()
}

// Define: quantidade de valores; maior e menor valor; soma e média de todos os valores
function finalizar() {
    let res = document.getElementById('numins');
    let section = document.getElementById('sec');

    // Remover os parágrafos gerados anteriormente
    let paragrafosGerados = document.querySelectorAll('.paragrafo-gerado');
    paragrafosGerados.forEach(paragrafo => {
        section.removeChild(paragrafo);
    });

    let paragrafo1 = document.createElement('p');
    paragrafo1.classList.add('paragrafo-gerado'); // Adiciona a classe
    paragrafo1.textContent = "Total de valores cadastrados: " + (res.options.length - 1);

    let paragrafo2 = document.createElement('p');
    paragrafo2.classList.add('paragrafo-gerado');
    paragrafo2.textContent = "Menor valor digitado: " + encontrarMenorValor(res);

    let paragrafo3 = document.createElement('p');
    paragrafo3.classList.add('paragrafo-gerado');
    paragrafo3.textContent = "Maior valor digitado: " + encontrarMaiorValor(res);

    let paragrafo4 = document.createElement('p');
    paragrafo4.classList.add('paragrafo-gerado');
    paragrafo4.textContent = "A soma dos valores digitados é: " + encontrarSoma(res);

    let paragrafo5 = document.createElement('p');
    paragrafo5.classList.add('paragrafo-gerado');
    paragrafo5.textContent = "A média dos valores digitados é: " + encontrarMedia(res);

    section.appendChild(paragrafo1);
    section.appendChild(paragrafo2);
    section.appendChild(paragrafo3);
    section.appendChild(paragrafo4);
    section.appendChild(paragrafo5);
}

function encontrarMenorValor(selectElement) {
    let valores = [...selectElement.options].map(option => parseFloat(option.value));
    valores.shift(); // Remove a primeira opção

    if (valores.length === 0) {
        return "Nenhum valor digitado";
    }

    let menorValor = Math.min(...valores);
    return menorValor;
}

function encontrarMaiorValor(selectElement) {
    let valores = [...selectElement.options].map(option => parseFloat(option.value));
    valores.shift(); // Remove a primeira opção

    if (valores.length === 0) {
        return "Nenhum valor digitado";
    }

    let maiorValor = Math.max(...valores);
    return maiorValor;
}

function encontrarSoma(numeros){
    let valores = [...numeros.options].map(option => parseFloat(option.value));
    valores.shift();

    return valores.reduce((total, numero) => total + numero, 0);    
}

function encontrarMedia(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    let soma = encontrarSoma(numeros);
    return soma / numeros.length;
}

function limparTudo() {
    let ndigit = document.getElementById('ndigit');
    let numins = document.getElementById('numins');
    let section = document.getElementById('sec');

    // Salvar o primeiro elemento antes de limpar
    let primeiroElemento = numins.options[0];

    // Resetar os valores dos inputs
    ndigit.value = '';
    numins.selectedIndex = 0; // Isso vai selecionar a primeira opção

    // Limpar o array (removendo todas as options, exceto o primeiro)
    numins.innerHTML = '';
    numins.appendChild(primeiroElemento);

    // Remover os parágrafos gerados
    let paragrafosGerados = document.querySelectorAll('.paragrafo-gerado');
    paragrafosGerados.forEach(paragrafo => {
        section.removeChild(paragrafo);
    });
}