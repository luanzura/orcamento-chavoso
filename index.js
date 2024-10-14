$(document).ready(function () {
  $("#gerar").on("click", function () {
    const quantidade = parseFloat($("#quantidade").val());
    const valorTotal = parseFloat($("#valorTotal").val());
    const desconto = parseFloat($("#desconto").val());
    const frete = parseFloat($("#frete").val());
    const freteTipo = $('input[type="radio"]:checked').val();
    const totalSemDesconto = valorTotal + frete;
    const totalComDesconto = valorTotal - desconto + frete;
    const correios = "img/correios.png";
    const loggi = "img/loggi.png";
    const redesul = "img/redesul.png";
    const jadlog = "img/jadlog.png";

    // Verifica o frete selecionado e altera a imagem antes da captura
    if (freteTipo === "SEDEX" || freteTipo === "PAC") {
      $(".img-correios").attr("src", correios);
    } else if (freteTipo === "REDESUL") {
      $(".img-correios").attr("src", redesul);
    } else if (freteTipo === "LOGGI") {
      $(".img-correios").attr("src", loggi);
    } else {
      $(".img-correios").attr("src", jadlog);
    }

    // Atualiza os valores visíveis na página
    $(".quantidadeResultado").text(quantidade);
    $(".valorResultado").text("R$" + valorTotal.toFixed(2));
    $(".freteValorResultado").text("R$" + frete.toFixed(2));
    $(".freteTipoResultado").text(freteTipo);
    $(".descontoResultado").text("R$" + desconto.toFixed(2));
    $(".totalSemResultado").text("R$" + totalSemDesconto.toFixed(2));
    $(".totalComResultado").text("R$" + totalComDesconto.toFixed(2));

    // Aguarda um pequeno delay para garantir que o DOM foi atualizado
    setTimeout(function () {
      // Captura a imagem correta após a atualização do DOM
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
    }, 100); // Tempo de atraso para garantir a atualização do DOM
  });
});
