function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

    function mudarPreco(botaoEscolhido){
        if(botaoEscolhido.id =="botaoAmarela"){
            document.getElementById('precoProduto').innerHTML = "R$376,88";
            document.getElementById('pecasDisponiveis').innerHTML = "171 disponiveis";
        }
        else if(botaoEscolhido.id =="botaoAzul"){
            document.getElementById('precoProduto').innerHTML = "R$219,90";
            document.getElementById('pecasDisponiveis').innerHTML = "179 disponiveis";
        }
        else if(botaoEscolhido.id =="botaoNomeNumero"){
            document.getElementById('precoProduto').innerHTML = "R$499,99";
            document.getElementById('pecasDisponiveis').innerHTML = "170 disponiveis";
        }
        else if(botaoEscolhido.id =="botaoAmarela"){
            document.getElementById('precoProduto').innerHTML = "R$499,99";
            document.getElementById('pecasDisponiveis').innerHTML = "177 disponiveis";
        }
    }

    function mudarTamanho(botaoEscolhido){
        if(botaoEscolhido.id =="botaoP"){
            document.getElementById('tamanhoProduto').innerHTML = "Tamanho selecionado: P";
        }
        else if(botaoEscolhido.id =="botaoM"){
            document.getElementById('tamanhoProduto').innerHTML = "Tamanho selecionado: M";
        }
        else if(botaoEscolhido.id =="botaoG"){
            document.getElementById('tamanhoProduto').innerHTML = "Tamanho selecionado: G";
        }
    }