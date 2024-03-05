const form = document.querySelector("form")
const weight_guide = document.getElementById("weight_guide")
const time = document.getElementById("time")
const heightInput = document.getElementById("height")
const weightInput = document.getElementById("weight")

setInterval(() => {
    let clock = new Date()
    time.innerHTML = clock.toLocaleTimeString()
    time.style.color = "red"
}, 1000)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let height = parseInt(heightInput.value)
    let weight = parseInt(weightInput.value)
    let result = document.getElementById("result")

    if (height === "" || height <= 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height"
        result.style.color = "red"
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "please give a valid weight"
        result.style.color = "red"
    } else {
        let bmi = (weight / ((height * height) / 1000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`;
        heightInput.value = "";
        weightInput.value = "";

        if (bmi < 18.6 && height && weight) {
            weight_guide.innerHTML = `${bmi} Under Weight`
            result.style.color = "yellow"
        }
        if (bmi > 18.6 && bmi < 24.9 && height && weight) {
            weight_guide.innerHTML = `${bmi} Normal Weight`
            result.style.color = "green"
        }
        if (bmi > 24.9 && height && weight) {
            weight_guide.innerHTML = `${bmi} Overweight Weight`
            result.style.color = "tomato"
        }

    }

})

