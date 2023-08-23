function viaCep() {
    let valorCep = document.querySelector('#cep').value;

    fetch('https://viacep.com.br/ws/' + valorCep + '/json/').then(function (respostaAPI) {
        console.log('resposta API', respostaAPI)/* ele executa e devolve com o status*/

        respostaAPI.json().then(function (retornoEmJson) { /* depois do status a gente tem que tratar e extrair os dados que precisamos , chamamos em json*/
            console.log('retorno em JSON', retornoEmJson)
            document.querySelector('#rua').value = retornoEmJson.logradouro;
            document.querySelector('bairro').value = retornoEmJson.bairro;
            document.querySelector('#cidade').value = retornoEmJson.cidade;
            document.querySelector('#uf').value = retornoEmJson.uf;
        })
    })
}
function Cadastrar(){
    let campos_obrigatorios = document.querySelectorAll('.campo-obrigatorio')
    for(let i = 0; i<campos_obrigatorios.length; i++){
        if (campos_obrigatorios [i].value===""){
            alert('Preencha o campo'+ campo[i].id)
            return
        }

    }
    alert('dados enviados com sucesso');
    document.querySelectorAll('input').value = '';
}