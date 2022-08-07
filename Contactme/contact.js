// const yesButton = document.getElementById("yesNoContainer")
// localStorage.setItem("yesnoButton", yesButton.elements['yesno'].value)
// console.log(yesButton)

const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
placeForResults.append(`${name} : ${value}`)
placeForResults.append(document.createElement("br"))
})