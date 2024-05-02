const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const button = document.getElementById('button');

altura.addEventListener('keydown', (event) => {
    if (event.key === ',') {
        event.preventDefault();
    }
});

function debounce(func, delay) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}

const debounceReturn = debounce(() => {
    if (altura.value.includes(',')) return

    if (altura.value.length === 3) {
        altura.value = altura.value.substring(0, 1) + ',' + altura.value.substring(1);
    }
}, 200);


altura.addEventListener('keydown', debounceReturn);


button.addEventListener('click', () => {
    const pesoValue = parseFloat(peso.value);
    novaAltura = altura.value.replace(',', '.')
    const imc = pesoValue / (parseFloat(novaAltura) ** 2);
    let resultado = document.createElement('p');
    resultado.textContent = `Seu IMC: ${imc.toFixed(2)}`;
    let div = document.createElement('div');
    div.appendChild(resultado);
    document.body.appendChild(div);
});
