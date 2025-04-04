function coletarcep() {
    let cep = document.querySelector("#cep").value 
    console.log(cep)
    dados(cep) 
    
}

//https://viacep.com.br/ws/49040383/json/
async function dados(cep) {
    

    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    console.log(dados)
    dadostela(dados)
}

//função para acessar qualquer link (fetch)

//permuta dos dados na tela

function dadostela(dados) {
    document.querySelector("#endereco").value = dados.logradouro

    document.querySelector("#bairro").value = dados.bairro
    document.querySelector("#estado").value = dados.uf
    document.querySelector("#regiao").value = dados.regiao 
    document.querySelector("#cidade").value = dados.localidade 


}

