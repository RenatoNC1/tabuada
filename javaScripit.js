// A função será executada quando o botão for clicado (onclick="gerarTabuada()")
function gerarTabuada() {
    
    // 1. Pega o elemento input
    const inputElemento = document.getElementById("valor"); 
    
    // 2. Extrai o valor NUMÉRICO digitado pelo usuário
    const numero = Number(inputElemento.value);
    
    // 3. Pega o elemento DIV onde vamos exibir os resultados
    const resultadoDiv = document.getElementById("resultado");
    
    // Zera o conteúdo da div para limpar tabuadas anteriores
    let conteudoHTML = `<h2>Tabuada do ${numero}</h2>`;
    
    // 4. Validação simples: garante que o número esteja entre 1 e 10
    if (numero < 1 || numero > 10 || isNaN(numero)) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, insira um número válido entre 1 e 10.</p>";
        return; // Sai da função se a validação falhar
    }

    // 5. Loop para calcular e construir a tabuada
    for(let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        
        // Constrói a linha e adiciona uma quebra de linha (<br>)
        conteudoHTML += `${numero} x ${i} = ${resultado}<br>`;
    }
    
    // 6. Exibe a tabuada completa na tela
    resultadoDiv.innerHTML = conteudoHTML;
}