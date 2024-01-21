// Side Bar Action
const menu = document.querySelector(".menu");
const navLinkBox = document.querySelector(".navLinkBox");

menu.addEventListener("click", () => {
    console.log("Open Menu")
    // Add / Remove class
    menu && menu.classList.contains('navOpen')?menu.classList.remove('navOpen'):menu.classList.add('navOpen')
    navLinkBox && navLinkBox.classList.contains('navLinkBoxOpen')?navLinkBox.classList.remove('navLinkBoxOpen'):navLinkBox.classList.add('navLinkBoxOpen')
});

const navLinks = document.querySelectorAll('.navLinkBox > a')
const currentNav = document.querySelector('.currentNav')
navLinks.forEach(nav => {
    nav.addEventListener("click",()=>{
        console.log("Nav Open")
        navLinks.forEach(allnav => {
            allnav.classList.remove('activeNav')
        })
        nav.classList.add('activeNav')
        currentNav.innerHTML=nav.dataset.name
    })
});