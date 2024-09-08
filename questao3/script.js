function calcularFaturamento() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const faturamentos = data.filter(dia => dia.valor > 0).map(dia => dia.valor);

            const media = faturamentos.reduce((acc, valor) => acc + valor, 0) / faturamentos.length;
            const menorValor = Math.min(...faturamentos);
            const maiorValor = Math.max(...faturamentos);

            const diasAcimaMedia = faturamentos.filter(valor => valor > media).length;

            document.getElementById('menor-valor').textContent = menorValor.toFixed(2);
            document.getElementById('maior-valor').textContent = maiorValor.toFixed(2);
            document.getElementById('dias-acima').textContent = diasAcimaMedia;
        });
}

calcularFaturamento();