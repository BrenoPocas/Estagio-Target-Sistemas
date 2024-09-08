const dados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

let total = getTotal(dados)

for (estado in dados) {
    const legenda = estado
    const valor = dados[estado]
    const participacao = ((valor / total) * 100).toFixed(2)
    criarElementoEstado(participacao, legenda, 200, getMaximumPercent(dados))
}

function getTotal(object) {
    let total = 0
    for (key in object) {
        total += dados[key]
    }
    return total
}

function criarElementoEstado(participacao, legenda, totalHeight, maxValue) {
    const grafico = document.querySelector(".grafico")

    const divEstado = document.createElement('div');
    divEstado.classList.add('estado');

    const spanValor = document.createElement('span');
    spanValor.classList.add('valor');
    spanValor.textContent = `${participacao}%`;
    divEstado.appendChild(spanValor);

    const divBarra = document.createElement('div');
    divBarra.classList.add('barra');
    divBarra.style.height = `${(totalHeight / (maxValue * 100)) * participacao}px`;
    divEstado.appendChild(divBarra);

    const spanLegenda = document.createElement('span');
    spanLegenda.classList.add('legenda');
    spanLegenda.textContent = legenda;
    divEstado.appendChild(spanLegenda);

    grafico.appendChild(divEstado)
}

function getMaximumPercent(object) {
    let maximum = -Infinity
    for (key in object) {
        if (object[key] > maximum) {
            maximum = object[key]
        }
    }
    return maximum / getTotal(object)
}