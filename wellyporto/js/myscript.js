const nav = document.getElementById('nav-js-mystyle');

window.addEventListener('scroll', function(){
    scrollposition = this.window.scrollY;

    if( scrollposition >= 60){
        nav.classList.add('nav-mystyle');
    }
    else if( scrollposition <= 60){
        nav.classList.remove('nav-mystyle');
    }
})