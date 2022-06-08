const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})

function validate(){

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let rMale = document.getElementById("radioMale").checked;
    let rFemale = document.getElementById("radioFemale").checked;
    let checkBox =  document.getElementById("checkAgree").checked;

    if(username == ""){
        return showError("Username must be filled!!")
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
    else{
        alert("Login Succses");
    }
}

let.error = document.getElementById("error")
function showError(message){
    error.innerHTML = message
    return false
}

