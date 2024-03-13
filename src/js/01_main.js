const scrollWrapper = document.querySelector (".header__wrapper")
window.addEventListener('scroll', ()=> {
    
    if(this.scrollY > 1) {
        scrollWrapper.classList.add("--header__wrapper-white")
    }
    else (
        scrollWrapper.classList.remove("--header__wrapper-white")
    )
});
/*function scrolHeader() {
    const scrollWrapper = document.querySelector (".header__wrapper")
window.addEventListener('scroll', ()=> {
    
    if(this.scrollY > 1) {
        scrollWrapper.classList.add("--header__wrapper-white")
    }
    else (
        scrollWrapper.classList.remove("--header__wrapper-white")
    )
});
 }

 scrolHeader()

 */