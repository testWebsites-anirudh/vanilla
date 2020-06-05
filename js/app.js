function navSlide(){

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');

    burger.addEventListener('click',()=>{

        overlay.classList.toggle('overlay-active');
        burger.classList.toggle('burger-active');
        
        nav.classList.toggle('nav-active');

        

    });

}


navSlide();
