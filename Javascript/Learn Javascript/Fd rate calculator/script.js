let calculate = document.getElementById("btn")


calculate.addEventListener("click", () => {
    let inputVal = Number(document.getElementById("input").value)

    let rate = 0
    if (inputVal <= 0) rate = 0

    if (inputVal < 3 && inputVal >= 1) rate = 5.8

    else if (inputVal >= 3 && inputVal <= 6) rate = 6.5

    else if (inputVal >= 7 && inputVal <= 9) rate = 6.8
    else if (inputVal >= 10) rate = 7

    let result = document.getElementById("result")
    result.innerHTML = rate + "%"
})