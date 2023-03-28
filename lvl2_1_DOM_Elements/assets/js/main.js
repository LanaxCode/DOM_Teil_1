const navHome = document.getElementById('navHome')
const navChange = document.getElementById('navChange')

navChange.addEventListener('click', () => {
    navHome.style.backgroundColor = "red"
    navHome.innerHTML = "emoH"
})