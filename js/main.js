
console.log('oi')

const inputValue = document.querySelector('input')
const botao = document.querySelector('.botao')
const erro = document.querySelector('p')
botao.addEventListener('click', hiddenValue)
function hiddenValue() {
 if(inputValue.value.length < 8){
  erro.classList.add('active')
  inputValue.classList.add('erro')
 }
 else if(inputValue.value) {
  const cep = fetch(`https://viacep.com.br/ws/${inputValue.value}/json/`)
  const resposta = cep.then(r => {
    return r.json()
  })
  resposta.then(r => {
    console.log(r.erro)
    if (!r.erro) {
      const rua = document.querySelector('.rua');
      rua.innerText = r.logradouro
      const bairro = document.querySelector('.bairro');
      bairro.innerText = r.bairro
      const cep = document.querySelector('.rua');
      cep.innerText = r.cep
      const localidade = document.querySelector('.localidade');
      localidade.innerText = r.uf
    }
    else {
      const rua = document.querySelector('.rua');
      rua.innerText = ""
      const bairro = document.querySelector('.bairro');
      bairro.innerText = ""
      const cep = document.querySelector('.rua');
      cep.innerText = ""
      const localidade = document.querySelector('.localidade');
      localidade.innerText = "Ajusta valor"
      
    }
    })
 }
 inputValue.value = "";
}
console.log(botao);
