const musica = document.getElementById("musica");
const botao = document.getElementById("btnMusica");

let tocando = false;

document.addEventListener("click", () => {
  if (!tocando) {
    musica.play();
    tocando = true;
    botao.innerText = "⏸️ Pausar música";
  }
}, { once: true });

function toggleMusica() {
  if (musica.paused) {
    musica.play();
    botao.innerText = "⏸️ Pausar música";
  } else {
    musica.pause();
    botao.innerText = "▶️ Tocar música";
  }
}
const mensagens = [
  "Maria Eduarda, você é o motivo do meu sorriso 💜",
  "Meu coração bate no seu ritmo 💓",
  "Eu te escolheria em todas as vidas ✨"
];

function mostrarMensagem(indice) {
  document.getElementById("mensagem").innerText = mensagens[indice];
}
