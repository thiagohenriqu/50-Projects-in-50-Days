const progress = document.getElementById("progress");
const voltar = document.getElementById("voltar");
const proximo = document.getElementById("proximo");
const circulos = document.querySelectorAll(".circulo");

let atualAtivo = 1;

proximo.addEventListener("click", () => {
  atualAtivo++;

  if (atualAtivo > circulos.length) {
    atualAtivo = circulos.length;
  }

  update();
});

voltar.addEventListener("click", () => {
  atualAtivo--;

  if (atualAtivo < 1) {
    atualAtivo = 1;
  }

  update();
});

function update() {
  circulos.forEach((circulo, index) => {
    if (index < atualAtivo) {
      circulo.classList.add("ativo");
    } else {
      circulo.classList.remove("ativo");
    }
  });

  const ativos = document.querySelectorAll(".ativo");

  progress.style.width =
    ((ativos.length - 1) / (circulos.length - 1)) * 100 + "%";

  if (atualAtivo === 1) {
    voltar.disabled = true;
  } else if (atualAtivo === circulos.length) {
    proximo.disabled = true;
  } else {
    voltar.disabled = false;
    proximo.disabled = false;
  }
}
