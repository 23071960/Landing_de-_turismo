let indiceAtual = 0;
const carrosselImagens = document.querySelector('.carrossel-imagens');
let totalImagens;

function mudarImagem(inc) {
    indiceAtual += inc;

    if (indiceAtual < 0) {
        indiceAtual = totalImagens - 1;
    } else if (indiceAtual >= totalImagens) {
        indiceAtual = 0;
    }

    carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function iniciarCarrossel() {
    setInterval(() => {
        mudarImagem(1);
    }, 3000); // Muda a imagem a cada 3 segundos
}

function duplicarImagens() {
    const imagens = carrosselImagens.innerHTML;
    carrosselImagens.innerHTML += imagens; // Duplica as imagens para permitir o loop contínuo

    // Atualiza o total de imagens após a duplicação
    totalImagens = document.querySelectorAll('.imagem-container').length;
}

window.onload = () => {
    duplicarImagens();
    iniciarCarrossel();

    // Eventos de clique para navegação manual
    document.querySelector('.carrossel-anterior').addEventListener('click', () => mudarImagem(-1));
    document.querySelector('.carrossel-proximo').addEventListener('click', () => mudarImagem(1));
};
