// const apps1 = document.querySelector('.container');
// const apps2 = document.querySelector('.container1');
// const apps3 = document.querySelector('.container2');

// const a = document.querySelector('.btn1');
// const b = document.querySelector('.btn2');
// const c = document.querySelector('.btn3');

// a.addEventListener('click', function(){
//     apps1.style.visibility = 'visible';
//     apps1.style.width = "50%";
//     apps1.style.mrigin = 'auto'
//     apps2.style.visibility = 'hidden';
//     apps3.style.visibility = 'hidden';
// })
// b.addEventListener('click', function(){
//     apps1.style.visibility = 'hidden';
//     apps2.style.visibility = 'visible';
//     apps3.style.visibility = 'hidden';
// })
// c.addEventListener('click', function(){
//     apps1.style.visibility = 'hidden';
//     apps2.style.visibility = 'hidden';
//     apps3.style.visibility = 'visible';
// })

const app = document.querySelector('nav');
const menu = document.querySelector('.menu');
const main = document.querySelector('.container');


menu.addEventListener('click', function(){
    if(ourStatus===1){
        app.style.width = (`250px`);
        main.style.marginLeft = '250px'
        ourStatus = 0;
    }else{
        app.style.width = '0%';
        main.style.marginLeft = '0px'
        ourStatus = 1;
    }
})

let ourStatus = 1;


