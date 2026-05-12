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
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">horas</p>
  </div>
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">min</p>
  </div>
  <div class="contador-digito">
    <p class="contador-digito-numero">7</p>
    <p class="contador-digito-texto">seg</p>
  </div>
</div>
comecaCronometro();
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}
if (tempoFinal > 0) {
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
} else {
  return [0, 0, 0, 0];
}
function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0]);
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}
function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
    for (let i = 0; i < contadores.length; i++) {
  document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
  document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
  document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
  document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
}
  }
}
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
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}
