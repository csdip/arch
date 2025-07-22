const navBtn =  document.querySelector('.header__nav-btn');
const headerMenu =  document.querySelector('.header__menu');
const name =  document.querySelector('.name');
const email =  document.querySelector('.email');
const message =  document.querySelector('.message');
const body =  document.querySelector('body');
const overlay =  document.querySelector('.overlay');
const preloader = document.querySelector('.preloader');
const loaderContainer = document.querySelector('.loader-container');


navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
    overlay.classList.toggle('active')
    body.classList.toggle('fix')
})


console.log("hello")






const timeOut = setTimeout(() => {
    loaderContainer.classList.add('container-hidden')
        document.body.removeChild(loaderContainer)
}, 1000)


window.addEventListener('load',()=>{
    timeOut;
});



