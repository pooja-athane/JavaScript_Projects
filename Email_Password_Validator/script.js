let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", function (dets) {
    dets.preventDefault()

    document.querySelector("#emailError").textContent = ""
    document.querySelector("#passError").textContent = ""

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value)
    let passans = passwordRegex.test(pass.value)

    let isValid = true

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Email is Incoorect"
        document.querySelector("#emailError").style.display = "initial"
        isValid = false
    }
    if (!passans) {
        document.querySelector("#passError").textContent = "Password is Incoorect"
        document.querySelector("#passError").style.display = "initial"
        isValid = false
    }

    if(isValid){
        document.querySelector(".result").textContent = "Everything is correct"
    }

})