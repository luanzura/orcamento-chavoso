$(document).ready(function() {
    $('#gerar').on('click', function() {
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

    $('#gerar').on('click', function() {
        html2canvas(document.querySelector('.gerar')).then(canvas => {
            canvas.toBlob(function(blob) {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]).then(function() {
                    alert('Imagem copiada!');
                }).catch(function(error) {
                    console.error('Erro: ', error);
                });
            });
        });
    });
});
