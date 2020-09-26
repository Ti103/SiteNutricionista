const calculaImc = (paciente) => {
    if(validaAltura(paciente) && validaPeso(paciente)){
        peso = Number(paciente.peso.textContent)
        altura = Number(paciente.altura.textContent)/100 
    
        paciente.imc.textContent = (peso / altura ** 2).toFixed(2)
        verificaImc(paciente)
    } else {
        paciente.imc.textContent = '-'
    }
}
