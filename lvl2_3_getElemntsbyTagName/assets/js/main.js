const link = document.getElementsByTagName('li')
const text = document.getElementsByTagName('a')
const navChange = document.getElementById('navChange')

navChange.addEventListener('click', () => {
    link[0].style.backgroundColor = "#f6c89f"
    link[1].style.backgroundColor = "#ffe7d1"
    link[2].style.backgroundColor = "#4b8e8d"
    link[3].style.backgroundColor = "#396362"
    text[0].style.color = "black"
    text[1].style.color = "black"
    text[2].style.color = "black"
})
console.log(text)