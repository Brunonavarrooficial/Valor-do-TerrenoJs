// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputLargura = e.target.querySelector('#largura');
  const inputComprimento = e.target.querySelector('#comprimento');
  const inputValor = e.target.querySelector('#valor');

  const largura = Number(inputLargura.value);
  const comprimento = Number(inputComprimento.value);
  const valor = Number(inputValor.value);

  if (!largura) {
    setResultado('Largura inválida, Preencha o Formulario!', false);
    return;
  }

  if (!comprimento) {
    setResultado('Comprimento inválido, Preencha o Formulario!', false);
    return;
  }

  if (!valor) {
    setResultado('Valor inválido, Preencha o Formulario!', false);
    return;
  }

  const valorFinal = getPlan(largura, comprimento, valor);  

  const msg = `O Valor do Terreno é: ${valorFinal} R$`;

  setResultado(msg, true);
});

function getPlan (largura, comprimento, valor) {
  const valorFinal = (largura * comprimento) * valor;
  return valorFinal.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
