let navBar = document.querySelector('.nav-bar');
let navimg = document.querySelector('.nav-img');
let navimgtext = document.querySelector('.nav-img-text');
let span = document.querySelectorAll('.hidden');
let navitem = document.querySelectorAll('.nav-item');
let navitem6 = document.querySelector('.nav-item6');
let navitem7= document.querySelector('.nav-item7');
let collapseBtn = document.querySelectorAll('.nav-btn');
let shiring = document.querySelector('.nav-shiring');
let navlist = document.querySelector('.nav-list');
let container = document.querySelector('.container');
let header = document.querySelector('.header');
let navitem8 = document.querySelector('.nav-item8');
let check = true;
for(let i=0; i<collapseBtn.length; i++) {
collapseBtn[i].addEventListener('click', function(e) {
    
    if(check == true)
    {
        container.classList.add('container2');
        header.classList.add('header2');
        navlist.classList.add('nav-list1');
    navBar.classList.add('nav-bar2');
    navimg.classList.add('nav-img1');
    shiring.classList.add('shiring');
   
        navimgtext.classList.add('nav-img-text1');
   
    for(let i=0;i<navitem.length;i++) {
       
        navitem[i].classList.add('nav-item2');
    }
    navitem6.classList.add('hidden');
    navitem8.classList.add('nav-item6-change');
    navitem7.classList.add('nav-item7-change');
    for(let i=0;i<span.length;i++) {
        span[i].classList.add('nav-bar2-text');
        span[i].classList.remove('hidden');
    }
    navitem7.classList.add('nav-item7-change');
    check = false;
    }
    else{
        container.classList.remove('container2');
        header.classList.remove('header2');

        navlist.classList.remove('nav-list1');
        navBar.classList.remove('nav-bar2');
        navimg.classList.remove('nav-img1');
        shiring.classList.remove('shiring');
       
            navimgtext.classList.remove('nav-img-text1');
       
        for(let i=0;i<navitem.length;i++) {
           
            navitem[i].classList.remove('nav-item2');
        }
    navitem6.classList.remove('hidden');

        navitem8.classList.remove('nav-item6-change');
        navitem7.classList.remove('nav-item7-change');
        for(let i=0;i<span.length;i++) {
            span[i].classList.remove('nav-bar2-text');
            span[i].classList.add('hidden');
        }
        navitem7.classList.remove('nav-item7-change');
        check = true;
    }
});
}
