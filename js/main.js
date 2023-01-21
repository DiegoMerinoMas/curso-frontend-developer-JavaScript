const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    // if(aside.classList.contains('inactive') === false) {
    //     toggleCarAside();
    // }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    // if(mobileMenu.classList.contains('inactive') === false) {
    //     toggleMobileMenu();
    // }
    aside.classList.toggle('inactive');
}