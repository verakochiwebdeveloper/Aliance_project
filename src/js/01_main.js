const scrollWrapper = document.querySelector (".header__wrapper");
const  mobileMenuButton = document.querySelector (".burger-btn");
const mobileMenu = document.querySelector (".header__wrapper-mobile");

const openMenu = (event) => {
    mobileMenu.classList.add ("--opene-mobile-menu")
    document.body.style.overflow= "hidden";
    scrollWrapper.classList.add("--header__wrapper-white");
    mobileMenuButton.classList.add("--opene-mobile-menu")
}

const closeMenu = (event) => {
    mobileMenu.classList.remove ("--opene-mobile-menu")
    document.body.style.overflow= "";
    scrollWrapper.classList.remove("--header__wrapper-white")
    mobileMenuButton.classList.add("--opene-mobile-menu")
}


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

 
    mobileMenuButton.addEventListener('clck',(event)=> {
        event.preventDefault();
        mobileMenu.classList.toggle("--opene-mobile-menu")
        if (mobileMenu.classList.contains())
        closeMenu();
         else {
            openMenu()

         }
    })