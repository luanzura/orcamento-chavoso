function buscaCep() {
  let reCep = document.getElementById("cep").value;
  if (reCep !== "") {
    let url = "https://viacep.com.br/ws/" + reCep + "/json/";

    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onload = function () {
      if (req.status === 200) {
        let endereco = JSON.parse(req.response);
        document.getElementById("rua").value = endereco.logradouro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("estado").value = endereco.uf;
        document.getElementById("bairro").value = endereco.bairro;
      } else if (req.status === 400) {
        alert("Cep inválido");
      } else {
        alert("Erro ao fazer a requisição");
      }
    };
  }
}

window.onload = function () {
  let txtReCep = document.getElementById("cep");
  txtReCep.addEventListener("input", buscaCep);
};
