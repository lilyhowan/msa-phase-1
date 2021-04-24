window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    btn.innerHTML = "World"

    let blue = false

    const handleClick = () => {
        if (blue) {
            console.log("Blue is true")
            btn.classList.add("btn-red")
        } else {
            console.log("Blue is false")
            btn.classList.remove("btn-red")
        }
        blue = !blue
    }

    btn.onclick = handleClick
    console.log(btn.classList)
}
