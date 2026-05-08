function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  segundos %= 60;
minutos %= 60;
horas %= 24;
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}
//comecaCronometro();
<div class="contador">
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">dias</p>
  </div>
  </div>