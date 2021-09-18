var listaFilmes = [];

if (localStorage.getItem("listaFilmes") != undefined) {
    listaFilmes = JSON.parse(localStorage.getItem("listaFilmes"));
    listarFilmesNaTela();
}

function adicionarFilme() {
    var capaFilme = document.getElementById("capaFilme").value;
    var nomeFilme = document.getElementById("nomeFilme").value;
    var linkFilme = document.getElementById("linkFilme").value;

    if (capaFilme.endsWith(".jpg")) {
        listaFilmes.push({
            "id": new Date().getTime(),
            "nome": nomeFilme,
            "link": linkFilme,
            "capa": capaFilme
        });
        document.getElementById("capaFilme").value = "";
        document.getElementById("nomeFilme").value = "";
        document.getElementById("linkFilme").value = "";
        localStorage.setItem("listaFilmes", JSON.stringify(listaFilmes));
    } else {
        alert("Endereço de filme inválido");
    }
    listarFilmesNaTela();
}

function removerFilme(id) {
    console.log(id);
    for (var x = 0; x < listaFilmes.length; x++) {
        if (listaFilmes[x].id == id) {
            listaFilmes.splice(x, 1);
            localStorage.setItem("listaFilmes", JSON.stringify(listaFilmes));
            listarFilmesNaTela();
        }
    }
}

function listarFilmesNaTela() {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = "";
    for (var x = 0; x < listaFilmes.length; x++) {
        var elementoFilme = '<div style="display: inline-grid;"><a href="' + listaFilmes[x].link + '" target="_blank"><img src="' + listaFilmes[x].capa + '" alt="' + listaFilmes[x].nome + '"></a><button onclick="removerFilme(' + listaFilmes[x].id + ')" class="btn-remover">Remover</button></div>';
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;
    }
}



