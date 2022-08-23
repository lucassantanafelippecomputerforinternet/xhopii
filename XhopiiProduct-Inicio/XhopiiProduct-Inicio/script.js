function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

    function mudarPreco(botaoEscolhido){
        if(botaoEscolhido.id =="botaoAmarela"){
            document.getElementById('precoProduto').innerHTML = "R$376,88";
        }
        else if(botaoEscolhido.id =="botaoAzul"){
            document.getElementById('precoProduto').innerHTML = "R$219,90";
        }
        else if(botaoEscolhido.id =="botaoNomeNumero"){
            document.getElementById('precoProduto').innerHTML = "R$499,99";
        }
    }