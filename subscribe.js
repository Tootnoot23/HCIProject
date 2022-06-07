const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})

function validate(){

    let username = document.getElementById("txtUsername").value
    let email = document.getElementById("txtEmail").value
    let phone = document.getElementById("txtPhone").value
    let country = document.getElementById("dropCountry").value
    let rMale = document.getElementById("radioMale").checked
    let rFemale = document.getElementById("radioFemale").checked
    let checkBox =  document.getElementById("checkAgree").checked

    if(username == ""){
        return showError("Username must be filled")
    }
    else if(email.indexOf("@") == -1){
        return showError("Email must contains '@'")
    }
    else if(!email.endsWith(".com")){
        return showError("Email must contains .com")
    }
    else if(!phone.startsWith("08")){
        return showError("Phone number must satarts with '08'")
    }
    else if(isNaN(phone)){
        return showError("Phone number must be numeric")
    }
    else if(phone.length !=12){
        return showError("Phone number must be 12 characters")
    }
    else if(country == ""){
        return showError("Country must be filled")
    }
    else if(rMale == false && rFemale == false){
        return showError("Gender must be selected")
    }
    else if(checkBox == false){
        return showError("Must agree to terms and condition")
    }
}

let.error = document.getElementById("error")

function showError(message){
    error.innerHTML = message
    return false
}
