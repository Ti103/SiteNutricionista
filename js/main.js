setLinhaTabelaRemovivel()

getPacientesHTML().forEach(paciente => {
    calculaImc(paciente)
})

filtro()

var btn = document.querySelector('#adicionar-paciente')
btn.addEventListener('click', evt => {
    evt.preventDefault()
    var dataForm = getDataForm()

    var tds = []

    for (var campo in dataForm) {
        tds.push(criarTd(dataForm[campo]))
    }

    var paciente = criarPaciente(tds)

    if(validaPaciente(paciente)){
        var linha = paciente.linha
        adicionarLinha(linha)
    
        getForm().reset()
    }
})
