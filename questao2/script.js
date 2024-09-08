const inputValue = document.getElementById("valor");
inputValue.addEventListener("input", e => {
    const value = inputValue.value
    if (value != '') {
        if (validateFibonacci(value)) {
            document.getElementById(
                "resultado"
            ).textContent = `O valor ${value} é válido.`;
        } else {
            document.getElementById(
                "resultado"
            ).textContent = `O valor ${value} é inválido.`;
        }
    } else {
        document.getElementById(
            "resultado"
        ).textContent = ``;
    }
})

function validateFibonacci(n) {
    if (n == 0 || n == 1) {
        return true;
    }
    let fibonacci = [0, 1]
    let current = fibonacci[fibonacci.length - 1]

    while (current < n) {
        let currentLength = fibonacci.length

        let next = fibonacci[currentLength - 2] + fibonacci[currentLength - 1]

        if (n == next) {
            return true
        } else {
            fibonacci.push(next)
            current = next
        }
    }

    return false;
}