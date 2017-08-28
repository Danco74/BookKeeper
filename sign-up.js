
function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordRep = document.getElementById("passwordRep").value;
    var country = document.getElementById("country").value;
    var telephone = document.getElementById("telephone").value;

    alert(telephone);

    var usernameMsg = document.getElementById("username-message");
    var passwordMsg = document.getElementById("password-message");
    var passwordRepMsg = document.getElementById("passwordRep-message");
    var countryMsg = document.getElementById("country-message");
    var telephoneMsg = document.getElementById("telephone-message");




    if (username.length < 5) {
        usernameMsg.innerHTML = "The supplied username is too short, try again using 5 or more characters";
        usernameMsg.style.color = "red";
    } else {
        usernameMsg.innerHTML = "";
    }
    if (password < 6){
        passwordMsg.innerHTML = "The supplied password is too short, try again using 6 or more characters";
        passwordMsg.style.color = "red";
    } else {
        passwordMsg.innerHTML = "";
    }
    if (password != passwordRep) {
        passwordRepMsg.innerHTML = "passwords do not match, play enter matching passwords";
        passwordRepMsg.style.color = "red";
    }else {
        passwordRepMsg.innerHTML = "";
    }
    if ((country != "Israel") && (country != "USA")){
        countryMsg.innerHTML = "We're allowing only Israeli or USA citiziens here, go away please";
        countryMsg.style.color = "red";
    }else {
        countryMsg.innerHTML = "";
    }
    if (telephone.length < 15){
        telephoneMsg.innerHTML = "Phone number should be 15 digits";
        telephoneMsg.style.color = "red";
    }else {
        telephoneMsg.innerHTML = "";
    }



}