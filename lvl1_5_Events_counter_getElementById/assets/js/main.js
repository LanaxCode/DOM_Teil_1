const button = document.getElementById('clickMe')

let anzahl = 0
function counter() {

    anzahl++
    button.innerHTML = "Click me: " + anzahl

}