$(document).ready(function(){
  $('#gerar').on('click', function() {
    const quantidade = parseFloat($("#quantidade").val());
    const valorTotal = parseFloat($("#valorTotal").val());
    const desconto = parseFloat($("#desconto").val());
    const frete = parseFloat($("#frete").val());
    const freteTipo = $('input[type="radio"]:checked').val();
    const totalSemDesconto = valorTotal + frete;
    const totalComDesconto = valorTotal - desconto + frete;

    console.log("Quantidade: " + quantidade);
    console.log("Valor Total: " + valorTotal);
    console.log("Desconto: " + desconto);
    console.log("Frete: " + frete);
    console.log("Tipo de Frete: " + freteTipo);

    $(".quantidadeResultado").text(quantidade);
    $(".valorResultado").text("R$" + valorTotal.toFixed(2)); 
    $(".freteValorResultado").text("R$" + frete.toFixed(2));
    $(".freteTipoResultado").text(freteTipo);
    $(".descontoResultado").text("R$" + desconto.toFixed(2));
    $(".totalSemResultado").text("R$" + totalSemDesconto.toFixed(2));
    $(".totalComResultado").text("R$" + totalComDesconto.toFixed(2));
    
    
  });
});
