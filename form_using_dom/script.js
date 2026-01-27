let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let main = document.querySelector(".main")


form.addEventListener("submit", function (dets) {
    dets.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")

    let profilePic = document.createElement("div")
    profilePic.classList.add("profilepic")

    let img = document.createElement("img")
    img.setAttribute("src", inputs[0].value)

    let h1 = document.createElement("h1")
    h1.textContent = inputs[1].value

    let h3 = document.createElement("h3")
    h3.textContent = inputs[2].value

    let h4 = document.createElement("h4")
    h4.textContent = inputs[3].value


    profilePic.appendChild(img)
    card.appendChild(profilePic)
    card.appendChild(h1)
    card.appendChild(h3)
    card.appendChild(h4)
    main.appendChild(card)


    form.reset()


})

