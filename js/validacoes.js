function validaAltura(paciente) {
    let altura = Number(paciente.altura.textContent)
    if (altura > 300 || altura < 30 || isNaN(altura)) {
        paciente.altura.classList.add('campo-invalido')
        msgErro("Altura inválido")
        return false
    } else {
        return true
    }
}

function validaPeso(paciente) {
    let peso = Number(paciente.peso.textContent)
    if (peso > 595 || peso < 0 || isNaN(peso)) {
        paciente.peso.classList.add('campo-invalido')
        
        msgErro("Peso inválido")
        return false
    } else {
        var ul = getForm().querySelector('#mensagem-erro')
        ul.querySelectorAll('li').forEach(li => {
            li.remove()
        })
        return true
    }
}

function validaNome(paciente) {
    if (!isNaN(Number(paciente.nome.textContent))) {
        paciente.nome.classList.add('campo-invalido')
        
        msgErro("Nome inválido")
        return false
    } else {
        return true
    }
}

function validaPaciente(paciente) {
    if (validaPeso(paciente) && validaAltura(paciente) && validaNome(paciente)) {
        return true
    } else {
        return
    }
}

function verificaImc(paciente) {
    var imc = Number(paciente.imc.textContent)

    if (imc <= 18.5) {
        paciente.imc.classList.add('abaixo-peso')
    } else if (imc <= 24.9) {
        paciente.imc.classList.add('peso-ideal')
    } else if (imc <= 29.9) {
        paciente.imc.classList.add('sobre-peso')
    } else {
        paciente.imc.classList.add('obesidade')

    }
}