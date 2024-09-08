$(document).ready(function () {
  $("#gerar").on("click", function () {
    const quantidade = parseFloat($("#quantidade").val());
    const valorTotal = parseFloat($("#valorTotal").val());
    const desconto = parseFloat($("#desconto").val());
    const frete = parseFloat($("#frete").val());
    const freteTipo = $('input[type="radio"]:checked').val();
    const totalSemDesconto = valorTotal + frete;
    const totalComDesconto = valorTotal - desconto + frete;

    $(".quantidadeResultado").text(quantidade);
    $(".valorResultado").text("R$" + valorTotal.toFixed(2));
    $(".freteValorResultado").text("R$" + frete.toFixed(2));
    $(".freteTipoResultado").text(freteTipo);
    $(".descontoResultado").text("R$" + desconto.toFixed(2));
    $(".totalSemResultado").text("R$" + totalSemDesconto.toFixed(2));
    $(".totalComResultado").text("R$" + totalComDesconto.toFixed(2));
  });

  $("#gerar").on("click", function () {
    html2canvas(document.querySelector(".gerar")).then((canvas) => {
      canvas.toBlob(function (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard
          .write([item])
          .then(function () {
            alert("Imagem copiada!");
            $("#orcamento")[0].reset();
          })
          .catch(function (error) {
            console.error("Erro: ", error);
          });
      });
    });
  });
});

// $(document).ready(function () {
//   $("#enviar").click(function () {
//     const nomeClient = $("#nomeCliente").val();
//     const codRastreamento = $("#codRastreamento").val();
//     const whastappNumero = $("#whastappNumero").val();
//     const idPedido = $("#idPedido").val();
//     const freteTipo = $('input[type="radio"]:checked').val();
//     const rua = $("#rua").val();
//     const numero = $("#numero").val();
//     const bairro = $("#bairro").val();
//     const cidade = $("#cidade").val();
//     const estado = $("#estado").val();

//     const mensagem = `🎉️ Olá ${nomeClient}!\nSeu pedido *${idPedido}* já foi enviado! 😍🙌\n\nVocê poderá rastrear seu pedido a partir das 16:00 de hoje! 🔍\n\nCódigo de rastreamento: *${codRastreamento}*\nTransportadora: *Correios ${freteTipo}*\n\nCertifique-se de revisar o endereço de entrega abaixo para garantir que esteja correto:\n*${rua} ${numero}*\n*${bairro}*\n*${cidade} - ${estado}*\n\nUtilize este link direto para rastreamento:\nhttps://app.melhorrastreio.com.br/app/correios/${codRastreamento}\n\nSe tiver dúvidas, estamos aqui para ajudar! 🤝💬`;
//     const mensagemCodificada = encodeURIComponent(mensagem);
//     const url = `https://web.whatsapp.com/send?phone=+55${whastappNumero}&text=${mensagemCodificada}`;

//     // Abre a URL na mesma aba
//     window.open(url, "_blank");

//     $("#rastreamento")[0].reset();
//   });
// });
