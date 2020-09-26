function setLinhaTabelaRemovivel() {
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.querySelectorAll('tr').forEach(linha => {
        setLinhaRemovivel(linha)
    })
}

function setLinhaRemovivel(linha){
    linha.addEventListener('dblclick', () => {
        linha.classList.add('fade-out')
        setTimeout(() => {
            linha.remove()
        }, 500)
    })
}

function adicionarLinha(linha) {
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(linha)
}

function criarLinha(paciente) {
    let linha = document.createElement('tr')
    linha.classList.add('paciente')
    for (td in paciente) {
        linha.appendChild(paciente[td])
    }
    setLinhaRemovivel(linha)
    return linha
}

function criarTd(data) {
    let td = document.createElement('td')
    td.textContent = data.value
    td.classList.add('info-' + data.id)

    return td
}

function removerLinha(paciente) {

}
