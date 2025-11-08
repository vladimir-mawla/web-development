let number = 0

const countElement = document.getElementById("count")
const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")

incrementButton.addEventListener("click", () => {
    number++
    // console.log(number)
    countElement.textContent = number
})

decrementButton.addEventListener("click", () => {
    number--
    // console.log(number)
    countElement.textContent = number
})