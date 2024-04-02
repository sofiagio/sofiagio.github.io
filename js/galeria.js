
document.addEventListener("DOMContentLoaded", function() {
    // Cria um objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Abre uma conexão para a pasta "images/" no servidor
    xhr.open("GET", "../img/galeria/", true);
    // Define a função a ser executada quando a solicitação Ajax for concluída
    xhr.onreadystatechange = function() {
        // Verifica se a solicitação foi bem-sucedida e se o estado está completo
        if (this.readyState === 4 && this.status === 200) {
            // Obtém a resposta da solicitação como uma string de texto
            var images = this.responseText;
            // Cria um novo objeto DOMParser para analisar a string de texto como um documento HTML
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(images, "text/html");
            // Obtém todas as tags "a" do documento HTML
            var links = htmlDoc.getElementsByTagName("a");
            // Itera por cada tag "a"
            for (var i = 0; i < links.length; i++) {
                // Obtém o nome do arquivo do link
                var file = links[i].getAttribute("href");
                // Verifica se o arquivo é uma imagem
                if (file.match(/\.(jpe?g|png|gif)$/)) {
                // Cria uma nova imagem
                var img = document.createElement("img");
                // Define o atributo "src" da imagem com o caminho completo para o arquivo de imagem na pasta "images/"
                img.src = "images/" + file;
                // Adiciona a nova imagem à div "image-gallery"
                document.getElementById("image-gallery").appendChild(img);
                }
            }
        }
    };
// Envia a solicitação Ajax
xhr.send();
});
