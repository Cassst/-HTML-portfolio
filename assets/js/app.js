//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};
menuToggleButton.addEventListener('click',toggleMenu);
// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const removeActiveLinkClass = e =>{
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }
}
document.addEventListener('click',removeActiveLinkClass);
// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const curretnTheme = localStorage.getItem('darkTheme');

if(curretnTheme){
    bodyElement.classList.add('dark-theme');
}

const toggleTheme = () =>{
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('dark-theme','active');
    }else{
        localStorage.removeItem('dark-theme');
    }
};
themeToggleButton.addEventListener('click',toggleTheme);
// !SCROLL REVEAL