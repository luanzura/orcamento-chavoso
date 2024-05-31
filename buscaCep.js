function buscaCep() {
  let reCep = $("#cep").val();
  if (reCep !== "") {
    let url = "https://viacep.com.br/ws/" + reCep + "/json/";

    $.get(url, function (endereco) {
      if (endereco.erro) {
        alert("Cep inválido");
      } else {
        $("#rua").val(endereco.logradouro);
        $("#cidade").val(endereco.localidade);
        $("#estado").val(endereco.uf);
        $("#bairro").val(endereco.bairro);
      }
    }).fail(function () {
      alert("Erro ao fazer a requisição");
    });
  }
}

$(document).ready(function () {
  $("#cep").on("input", buscaCep);
});
