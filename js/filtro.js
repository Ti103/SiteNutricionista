var input = document.querySelector('#filtro-form')

input.addEventListener('input', filtro)

function filtro() {
    var pacientes = getPacientesHTML()
    pacientes.forEach(paciente => {
        let nome = paciente.nome.textContent

        if (!nome.includes(input.value)) {
            paciente.linha.classList.add('invisivel')
        } else {
            paciente.linha.classList.remove('invisivel')
        }
    });
}
