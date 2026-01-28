function searchWiki(){
    const request = document.querySelector('#search-input').value.trim();
        if(request){
            const url = `https://uk.wikipedia.org/wiki/${request}`;
                window.location.href = url;
        }else{

    }
}
document.querySelector('.input').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        searchWiki();
    }
});
function toggleMenu(){
    document.querySelector('.main-menu').classList.toggle('display');
}
