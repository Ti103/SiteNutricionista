const getForm = () => {
    var form = document.querySelector('form')
    
    return form
}

function getDataForm() {
    var form = getForm()
    
    var dataForm = {
        nome: form.nome,
        peso: form.peso,
        altura: form.altura,
        gordura: form.gordura,
    }

    return dataForm
}

function msgErro(msg) {
    var ul = getForm().querySelector('#mensagem-erro')
    var li = document.createElement('li')
    li.textContent = msg
    li.classList.add('campo-invalido')
    ul.appendChild(li)
}