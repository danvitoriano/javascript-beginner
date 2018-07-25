var campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function(){
  console.log(this.value)
  var pacientes = document.querySelectorAll('.paciente')
  
  if(this.value.length > 0){
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector('.info-nome')
      var nome = tdNome.textContent

      var expressao = new RegExp(this.value, 'i')
  
      if(!expressao.test(nome)){
        paciente.classList.add('invisivel')
      } else {
        paciente.classList.remove('invisivel')
      } 

      // SEM USO DE REGEX
      // var comparavel = nome.substr(0, this.value.length)
      // var comparavelMinusculo = comparavel.toLowerCase()
      // var valorDigitadoMinusculo = this.value.toLowerCase()
  
      // if(!(valorDigitadoMinusculo == comparavelMinusculo)){
      //   paciente.classList.add('invisivel')
      // } else {
      //   paciente.classList.remove('invisivel')
      // } 

    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove('invisivel')
      
    }
  }
})