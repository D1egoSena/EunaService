// Avanca para a proxima página

document.addEventListener("DOMContentLoaded", function () {
    function redirecionar(destino) {
        window.location.href = destino;
    }

    // Mapeamento dos botões para seus destinos
    const botoes = [
        { id: "btn-cadastrar", destino: "cadastro.html" },
        { id: "btn-login", destino: "login.html" },
        { id: "botao-proximo", destino: "profissional-acesso.html" },
        { id: "botao-proximo2", destino: "profissional-fotos.html" },
        { id: "botao-proximo3", destino: "profissional-horarios.html" },
        { id: "botao-proximo4", destino: "profissional-servicos.html" },
        { id: "botao-proximo5", destino: "painel.html" },
    ];

    // Adiciona eventos aos botões
    botoes.forEach(function (botaoInfo) {
        const botao = document.getElementById(botaoInfo.id);
        if (botao) {
            botao.addEventListener("click", function () {
                redirecionar(botaoInfo.destino);
            });
        }
    });
});

// Voltar para pagina anterior 

document.getElementById("botao-anterior").addEventListener("click", function () {
    window.history.back();
});

// Adiciona as fotos selecionadas no label para fotos

function displayFileImage(inputId, imageId) {
    const fileInput = document.getElementById(inputId);
    const fileImage = document.getElementById(imageId);
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const objectURL = URL.createObjectURL(file);
        fileImage.src = objectURL;
        fileImage.style.display = 'block';
    } else {
        fileImage.src = '#';
        fileImage.style.display = 'none';
    }
}

