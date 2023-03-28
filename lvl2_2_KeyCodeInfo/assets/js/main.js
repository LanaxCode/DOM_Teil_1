const key = document.getElementById('key')
const keyCode = document.getElementById('keyCode')
const code = document.getElementById('code')
const keyCodeh1 = document.getElementById('keyCodeh1')

document.addEventListener('keydown', (event) => {
    key.innerHTML = (event.key)
    keyCode.innerHTML = (event.keyCode)
    code.innerHTML = (event.code)
    keyCodeh1.innerHTML = (event.keyCode)
})