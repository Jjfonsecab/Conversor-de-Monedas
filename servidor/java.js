const UNIDAD_KILOMETRO = "Kilometro";
const UNIDAD_METRO = "Metro";
const UNIDAD_CENTIMETRO = "Centimetro";

const FACTOR_CONVERSION = {
  [UNIDAD_KILOMETRO]: {
    [UNIDAD_KILOMETRO]: 1,
    [UNIDAD_METRO]: 1000,
    [UNIDAD_CENTIMETRO]: 100000
  },
  [UNIDAD_METRO]: {
    [UNIDAD_KILOMETRO]: 1/1000,
    [UNIDAD_METRO]: 1,
    [UNIDAD_CENTIMETRO]: 100
  },
  [UNIDAD_CENTIMETRO]: {
    [UNIDAD_KILOMETRO]: 1/100000,
    [UNIDAD_METRO]: 1/100,
    [UNIDAD_CENTIMETRO]: 1
  }
};

const valor = document.getElementById("valor");
const txtResultado = document.getElementById("resultado");
const unidad1 = document.getElementById("unidad1");
const unidad2 = document.getElementById("unidad2");

function convertir() {
  const numero = parseFloat(valor.value);
  
  if (isNaN(numero)) {
    txtResultado.innerHTML = "Ingresa un número válido";
    return;
  }

  const unidad_origen = unidad1.value;
  const unidad_destino = unidad2.value;

  if (unidad_origen === unidad_destino) {
    txtResultado.innerHTML = "Las unidades son iguales";
    return;
  }

  const factor = FACTOR_CONVERSION[unidad_origen][unidad_destino];
  const resultado = numero * factor;

  txtResultado.innerHTML = `${numero}${unidad_origen}'s equivalen a ${resultado}${unidad_destino}'s`;
}

valor.addEventListener('keyup', convertir);
unidad1.addEventListener('change', convertir);
unidad2.addEventListener('change', convertir);