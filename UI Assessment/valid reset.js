const pwd1 = document.getElementById("pwd1")
const pwd2 = document.getElementById("pwd2")

const form1 = document.getElementById("form1")

form1.addEventListener('submit', (e) =>{

    var upperCaseLetters = /[A-Z]/g;
    if (pwd1.value.length < 5 ){
        e.preventDefault();
        alert("Your password must have atleast 5 characters.");
    }

    if(!pwd1.value.match(upperCaseLetters)) {  
        e.preventDefault();
        alert("Your password must have atleast 1 UpperCase.")
    }

    if(pwd1.value != pwd2.value) {
        e.preventDefault();
        alert("The passwords don't match. Please retype your passwords.");
    }
})