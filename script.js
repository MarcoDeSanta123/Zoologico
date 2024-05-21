document.addEventListener("DOMContentLoaded", function() {
    // Dados fictícios da tabela
    var dados = [
        { tipo: 'Leopardo', consumoDiario: 5 },
        { tipo: 'Elefante', consumoDiario: 50 },
        { tipo: 'Girafa', consumoDiario: 30 },
        { tipo: 'Tigre', consumoDiario: 8 },
        { tipo: 'Zebra', consumoDiario: 15 },
        { tipo: 'Macaco', consumoDiario: 3 },
        { tipo: 'Urso', consumoDiario: 20 },
        { tipo: 'Pinguim', consumoDiario: 2 }
    ];

    // Função para calcular o consumo e custo estimado por mês
    function calcularConsumo(tipo, quantidade, custoPorKilo) {
        var consumoDiario = dados.find(function(item) {
            return item.tipo === tipo;
        }).consumoDiario;

        var consumoDiarioPorAnimal = consumoDiario;
        var consumoDiarioTotal = consumoDiario * quantidade;
        var consumoMensal = consumoDiarioTotal * 30;
        var custoMensal = consumoMensal * custoPorKilo;

        return {
            consumoDiarioPorAnimal: consumoDiarioPorAnimal,
            consumoDiarioTotal: consumoDiarioTotal,
            consumoMensal: consumoMensal,
            custoMensal: custoMensal
        };
    }

    // Função principal para processar os dados de entrada
    function processarDadosEntrada() {
        var tipoAnimal = document.getElementById("tipo-animal").value;
        var quantidadeAnimais = parseInt(document.getElementById("quantidade-animais").value);
        var custoPorKilo = parseFloat(document.getElementById("custo-por-kilo").value);

        var resultados = calcularConsumo(tipoAnimal, quantidadeAnimais, custoPorKilo);
        exibirResultados(resultados);
    }

    // Função para exibir os resultados na tabela HTML
    function exibirResultados(resultados) {
        document.getElementById("consumo-diario-por-animal").textContent = resultados.consumoDiarioPorAnimal;
        document.getElementById("consumo-diario-total").textContent = resultados.consumoDiarioTotal;
        document.getElementById("consumo-mensal").textContent = resultados.consumoMensal;
        document.getElementById("custo-mensal").textContent = resultados.custoMensal;
    }

    // Adicionar evento de clique ao botão de processar dados
    document.getElementById("calcular").addEventListener("click", processarDadosEntrada);
});

document.addEventListener("DOMContentLoaded", function() {
    // Dados fictícios da tabela
    var dados = [
        { tipo: 'Leopardo', consumoDiario: 5 },
        { tipo: 'Elefante', consumoDiario: 50 },
        { tipo: 'Girafa', consumoDiario: 30 },
        { tipo: 'Tigre', consumoDiario: 8 },
        { tipo: 'Zebra', consumoDiario: 15 },
        { tipo: 'Macaco', consumoDiario: 3 },
        { tipo: 'Urso', consumoDiario: 20 },
        { tipo: 'Pinguim', consumoDiario: 2 }
    ];

    // Função para calcular o consumo e custo estimado por mês
    function calcularConsumo(tipo, quantidade, custoPorKilo) {
        var consumoDiario = dados.find(function(item) {
            return item.tipo === tipo;
        }).consumoDiario;

        var consumoDiarioPorAnimal = consumoDiario;
        var consumoDiarioTotal = consumoDiario * quantidade;
        var consumoMensal = consumoDiarioTotal * 30;
        var custoMensal = consumoMensal * custoPorKilo;

        return {
            consumoDiarioPorAnimal: consumoDiarioPorAnimal,
            consumoDiarioTotal: consumoDiarioTotal,
            consumoMensal: consumoMensal,
            custoMensal: custoMensal
        };
    }

    // Função principal para processar os dados de entrada
    function processarDadosEntrada() {
        var tipoAnimal = document.getElementById("tipo-animal").value;
        var quantidadeAnimais = parseInt(document.getElementById("quantidade-animais").value);
        var custoPorKilo = parseFloat(document.getElementById("custo-por-kilo").value);

        // Gerar valores aleatórios para os resultados
        var resultados = {
            consumoDiarioPorAnimal: Math.floor(Math.random() * 10) + 1, // Valor aleatório entre 1 e 10
            consumoDiarioTotal: Math.floor(Math.random() * 100) + 1, // Valor aleatório entre 1 e 100
            consumoMensal: Math.floor(Math.random() * 3000) + 1, // Valor aleatório entre 1 e 3000
            custoMensal: Math.floor(Math.random() * 10000) + 1 // Valor aleatório entre 1 e 10000
        };

        exibirResultados(resultados);
    }

    // Função para exibir os resultados na tabela HTML
    function exibirResultados(resultados) {
        document.getElementById("consumo-diario-por-animal").textContent = resultados.consumoDiarioPorAnimal;
        document.getElementById("consumo-diario-total").textContent = resultados.consumoDiarioTotal;
        document.getElementById("consumo-mensal").textContent = resultados.consumoMensal;
        document.getElementById("custo-mensal").textContent = resultados.custoMensal;
    }

    // Adicionar evento de clique ao botão de processar dados
    document.getElementById("calcular").addEventListener("click", processarDadosEntrada);
});
