
document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria');
    const urlJson = 'https://raw.githubusercontent.com/sofiagio/sofiagio.github.io/github.com/sofiagio/sofiagio.github.io/json/galeria.json'; // Substitua pela URL correta do seu arquivo JSON
    
    console.log("teste de js")
    fetch(urlJson)
      .then(response => response.json())
      .then(data => {
        data.imagens.forEach(imagem => {
          const img = document.createElement('img');
          img.src = `https://raw.githubusercontent.com/sofiagio/sofiagio.github.io/github.com/sofiagio/sofiagio.github.io/img/galeria/${imagem}`; // Substitua pela URL correta
          img.alt = imagem;
          galeria.appendChild(img);
        });
      })
      .catch(error => console.error('Erro ao carregar imagens:', error));
});
