const entrada = document.querySelector("#texto")
const saida = document.querySelector("#resultado")

entrada.addEventListener("input", () => {
    let resultado = ''
    for(letra in entrada.value){
        resultado = entrada.value[letra] + resultado
    }
    saida.innerHTML = `String invertida: ${resultado}`
})