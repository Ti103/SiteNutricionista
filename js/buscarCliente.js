var url = "https://api-pacientes.herokuapp.com/pacientes"
var xhr = new XMLHttpRequest()
var pacientes

xhr.open('GET', url)

xhr.addEventListener('load', () => {
    pacientes = xhr.responseText
})
xhr.send