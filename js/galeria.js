
document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria');
    const urlJson = 'https://github.com/sofiagio/sofiagio.github.io/tree/github.com/sofiagio/sofiagio.github.io/json/galeria.json'; // Substitua pela URL correta do seu arquivo JSON
  
    fetch(urlJson)
      .then(response => response.json())
      .then(data => {
        data.imagens.forEach(imagem => {
          const img = document.createElement('img');
          img.src = `https://github.com/sofiagio/sofiagio.github.io/tree/github.com/sofiagio/sofiagio.github.io/img/galeria/${imagem}`; // Substitua pela URL correta
          img.alt = imagem;
          galeria.appendChild(img);
        });
      })
      .catch(error => console.error('Erro ao carregar imagens:', error));
});
