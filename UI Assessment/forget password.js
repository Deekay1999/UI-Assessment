  
function handleSubmit () {
  const email = document.getElementById('email').value;
  
  sessionStorage.setItem("EMAIL", email);
  
  return;
}