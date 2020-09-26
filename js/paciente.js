function getPacientesHTML() {
    var pacientes = []

    document.querySelectorAll(".paciente").forEach(linha => {
        pacientes.push({
            nome: linha.querySelector('.info-nome'),
            peso: linha.querySelector('.info-peso'),
            altura: linha.querySelector('.info-altura'),
            gordura: linha.querySelector('.info-gordura').textContent,
            imc: linha.querySelector('.info-imc'),
            linha: linha
        });
    });
    
    return pacientes
}

function criarPaciente(tds){
    var paciente = {
        nome: tds[0],
        peso: tds[1],
        altura: tds[2],
        gordura: tds[3],
        imc: document.createElement('td'),
        linha: HTMLTableRowElement
    }
    
    calculaImc(paciente)
    paciente.imc.classList.add('info-imc')
    tds.push(paciente.imc)
    paciente.linha = criarLinha(tds)

    return paciente
}
