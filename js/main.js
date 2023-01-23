/*const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleCarshoppingCartContainer);

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive');
    // if(shoppingCartContainer.classList.contains('inactive') === false) {
    //     toggleCarshoppingCartContainer();
    // }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarshoppingCartContainer() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    // if(mobileMenu.classList.contains('inactive') === false) {
    //     toggleMobileMenu();
    // }
    shoppingCartContainer.classList.toggle('inactive');
}*/

const menuEmail = document.querySelector('.navbar-email');
const prueba = document.getElementsByClassName('prueba');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const grayBackground = document.querySelector('.gray-background');
const totalMount = document.querySelector('#totalCost');

let itemsNumber = document.querySelector('#itemsCounter');
let itemsNumberCart = 0; let lastValue = 0; let arrayTotal = [];

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', () => productDetailContainer.classList.add('inactive'));


function toggleDesktopMenu() {
  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive');
  // }
  
  //shoppingCartContainer.classList.add('inactive');
  
  toggleElement(mobileMenu);
  toggleElement(shoppingCartContainer);
  toggleElement(productDetailContainer);
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive'); 
  // }

  //shoppingCartContainer.classList.add('inactive');
  
  toggleElement(desktopMenu);
  toggleElement(shoppingCartContainer);
  toggleElement(productDetailContainer);
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive'); 
  // }

  // mobileMenu.classList.add('inactive');
  // desktopMenu.classList.add('inactive');  

  toggleElement(mobileMenu);
  toggleElement(desktopMenu);
  toggleElement(productDetailContainer);
  shoppingCartContainer.classList.toggle('inactive');
}

function openProducDetailAside() {
  toggleElement(mobileMenu);
  toggleElement(desktopMenu);
  toggleElement(shoppingCartContainer);
  productDetailContainer.classList.remove('inactive');
}

function toggleElement(element) {
  if(!element.classList.contains('inactive')) {
    element.classList.add('inactive');
  }
}



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: "ADXL345",
  price: 1500,
  image: "https://moviltronics.com/wp-content/uploads/2015/10/1538-thickbox_default-Modulo-Acelerometro-3-ejes-ADXL345-600x600.jpg",
});
productList.push({
  name: "Arduino Nano CH340",
  price: 420,
  image: "https://moviltronics.com/wp-content/uploads/2018/06/M10009-600x450.png",
});
productList.push({
  name: "Resistence packs",
  price: 250,
  image: "https://moviltronics.com/wp-content/uploads/2020/05/Resistencias-600x600.jpg",
})

//make a function for add products
function addProduct(name, price, image){
    productList.push({
        name: name,
        price: price,
        image: image,
    });
}

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProducDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);    
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);