const fs = require('fs');
const path = require('path');

// Pasta onde as imagens estão armazenadas
const imageDir = 'img/galeria/';

// Função para gerar o JSON
function gerarJsonDeImagens() {
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error('Erro ao ler a pasta:', err);
      return;
    }

    const imagens = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
    const json = JSON.stringify({ imagens });

    fs.writeFile('json/galeria.json', json, (err) => {
      if (err) {
        console.error('Erro ao escrever o arquivo JSON:', err);
      } else {
        console.log('Arquivo JSON criado com sucesso!');
      }
    });
  });
}

gerarJsonDeImagens();