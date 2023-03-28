const selection = document.getElementById('my-select')
const optionSelected = document.getElementById('option-selected')

selection.addEventListener("change", (event) => {
    optionSelected.innerHTML = "Sie haben ausgewählt " + event.target.value

})