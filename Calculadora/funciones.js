const pantalla = document.getElementById('pantalla');

const limpiar = () => {
    pantalla.value = '';
};

const aggdigito = (value) => {
    pantalla.value += value;
};

const borraultimo = () => {
    const currentExpression = pantalla.value;
    pantalla.value = currentExpression.slice(0, -1);
};

const resultado = () => {
    try {
        const expression = pantalla.value;

        const result = parseFloat(eval(expression).toFixed(10));

        pantalla.value = result;
    } catch (error) {
        pantalla.value = 'Error';
    }
};
