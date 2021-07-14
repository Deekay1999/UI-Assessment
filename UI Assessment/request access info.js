window.addEventListener('load', () => {
    
    const name = sessionStorage.getItem('NAME');
    
    document.getElementById('result-name').innerHTML = name;

})