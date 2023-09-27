let loading = document.querySelector('.loading');

function loadingPage() {
    loading.style.display = 'none'
};

setTimeout(loadingPage, 5000);



let textInp = document.querySelector('.textInp');

textInp.addEventListener('keydown', (e) => {
    if(e.keyCode === 8){
        e.preventDefault();
        textInp.value += " ";
    } else if(e.keyCode === 32){
        e.preventDefault();
        textInp.value = textInp.value.slice(0, -1);
    }
})