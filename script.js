let prato = "";
let valorPrato = 0;
let bebida = "";
let valorBebida = 0;
let sobremesa = "";
let valoSobremesa = 0;
let valorTotal ="";

function selecionarPrato(produto){
  prato = document.querySelector("." + produto +" h1");
  valorPrato = document.querySelector("." + produto + " h2");
  const produtoSelecionado = document.querySelector("." + produto);
  const produtoSelecionadoAntes = document.querySelector(".Prato .selecionado");

  if(produtoSelecionadoAntes !== null){
    produtoSelecionadoAntes.classList.remove("selecionado");
  }
  produtoSelecionado.classList.add("selecionado");
  mudaBotao();
}
function selecionarBebida(produto){
  bebida = document.querySelector("." + produto +" h1");
  valorBebida = document.querySelector("." + produto + " h2");
  const produtoSelecionado = document.querySelector("." + produto);
  const produtoSelecionadoAntes = document.querySelector(".Bebida .selecionado");

  if(produtoSelecionadoAntes !== null){
    produtoSelecionadoAntes.classList.remove("selecionado");
  }
  produtoSelecionado.classList.add("selecionado");
  mudaBotao();
}
function selecionarSobremesa(produto){
  sobremesa = document.querySelector("." + produto +" h1");
  valorSobremesa = document.querySelector("." + produto + " h2");
  const produtoSelecionado = document.querySelector("." + produto);
  const produtoSelecionadoAntes = document.querySelector(".Sobremesa .selecionado");

  if(produtoSelecionadoAntes !== null){
    produtoSelecionadoAntes.classList.remove("selecionado");
  }
  produtoSelecionado.classList.add("selecionado");
  mudaBotao();
}

function mudaBotao(){
  if(prato !==""){
    if(bebida !==""){
      if(sobremesa !==""){
        const botao = document.querySelector(".botaoConfirmar");
        botao.classList.add("botaoModificado");
        const texto = 'Finalizar Pedido';
        botao.innerHTML = texto;
      }
    }
  }
}

function finalizarPedido(){
  const fundoConfirmacao = document.querySelector(".fundoConfirmacao");
  fundoConfirmacao.classList.remove("escondido");

  const escolhaPrato = document.querySelector(".escolhaPrato");
  escolhaPrato.innerHTML = prato.innerHTML + ": " + valorPrato.innerHTML;

  const escolhaBebida = document.querySelector(".escolhaBebida");
  escolhaBebida.innerHTML = bebida.innerHTML + ": " + valorBebida.innerHTML;

  const escolhaSobremesa = document.querySelector(".escolhaSobremesa");
  escolhaSobremesa.innerHTML = sobremesa.innerHTML + ": " + valorSobremesa.innerHTML;

  valorTotal = document.querySelector(".valorTotal");
  valorTotal.innerHTML = "Total: " + (Number(valorPrato.innerHTML) + Number(valorBebida.innerHTML) + Number(valorSobremesa.innerHTML)).toFixed(2);

}
function fecharJanela(){
  document.querySelector(".fundoConfirmacao").classList.add("escondido");
}
function enviarPedido(){
  const mensagem = 'Olá, gostaria de fazer o pedido:\n- ' + prato.innerHTML + '\n- ' + bebida.innerHTML + '\n- ' + sobremesa.innerHTML + '\n' + valorTotal.innerHTML;
  const url = 'https://wa.me/5519989818476?text=' + encodeURIComponent(mensagem);
  window.location.href = url;
}