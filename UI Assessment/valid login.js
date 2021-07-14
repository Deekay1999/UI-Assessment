const pwd = document.getElementById("pwd")

const form = document.getElementById("form")


form.addEventListener('submit', (e) => {
    
    var upperCaseLetters = /[A-Z]/g;
    if (pwd.value.length < 5 ){
        e.preventDefault();
        alert("Your password must have atleast 5 characters");
    }

    if(!pwd.value.match(upperCaseLetters)) {
        e.preventDefault();  
        alert("Your password must have atleast 1 UpperCase")
    }
    
})
