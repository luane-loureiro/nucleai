const images = document.querySelectorAll('.svg-image');
let currentIndex = 0;
let interval;

// Função para mostrar a próxima imagem
function showNextImage() {
  // Remove a classe "active" da imagem atual
  images[currentIndex].classList.remove('active');

  // Atualiza o índice para a próxima imagem
  currentIndex = (currentIndex + 1) % images.length;

  // Adiciona a classe "active" à próxima imagem
  images[currentIndex].classList.add('active');

  // Ajusta o tempo se for a imagem 1
  clearInterval(interval); // Limpa o intervalo anterior
  const duration = currentIndex === 0 ? 4000 : 2000; // 6 segundos para a imagem 1, 3 segundos para as outras
  interval = setInterval(showNextImage, duration);
}

// Inicializa a primeira imagem como visível
images[currentIndex].classList.add('active');

// Configura o primeiro intervalo
interval = setInterval(showNextImage, 4000); // 6
