const paineis = document.querySelectorAll(".painel");

paineis.forEach((painel) => {
  painel.addEventListener("click", () => {
    removeClasseAtivo();
    painel.classList.add("ativo");
  });
});

function removeClasseAtivo() {
  paineis.forEach((painel) => {
    painel.classList.remove("ativo");
  });
}
