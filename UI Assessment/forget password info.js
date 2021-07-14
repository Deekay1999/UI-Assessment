window.addEventListener('load', () => {
    
    const email = sessionStorage.getItem('EMAIL');
    
    document.getElementById('email1').innerHTML = email;

})